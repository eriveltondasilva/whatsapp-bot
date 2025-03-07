import { MessageType } from '@/config/enums.js';
import type { ActionsMap } from '@/types/index.js';
import { getDelay, logger } from '@/utils/index.js';
import type { Whatsapp } from '@wppconnect-team/wppconnect';

type MessageResponse = {
    type: MessageType;
    content: string[];
};

export class MessageSender {
    public async send(client: Whatsapp, phone: string, response: MessageResponse) {
        const { type, content } = response

        const sendActions: ActionsMap<MessageType> = {
            [MessageType.TEXT]: () => this.sendText(client, phone, content),
            [MessageType.LIST]: () => this.sendText(client, phone, content),
            [MessageType.IMAGE]: () => this.sendText(client, phone, content)
        }

        const sendAction = sendActions[type] || sendActions[MessageType.TEXT];
        if (sendAction) await sendAction();
    }

    // ###
    public async sendErrorMessage(client: Whatsapp, phone: string): Promise<void> {
        logger.error('❌ Error sending message: %o', { phone })
        await this.sendText(client, phone, [
            '❌ Desculpe, ocorreu um erro ao processar sua mensagem.',
            'Por favor, tente novamente em alguns instantes.',
        ]);
    }

    private async sendText(client: Whatsapp, phone: string, content: string[]) {
        try {
            await client.sendText(phone, content.join('\n'), { delay: getDelay() })
            logger.info('📬 Message sent: %o', { phone })
        } catch (error) {
            logger.error('❌ Message sending failed: %o', { phone, error })
        }
    }

    private async sendList(client: Whatsapp, phone: string, content: string[]) {
        const [title, description, ...rows] = content

        if (!title || !rows?.length) {
            logger.error('🚫 Invalid list data: %o', { title, rows })
            return false
        }

        try {
            await client.sendListMessage(phone, {
                buttonText: 'Clique Aqui',
                title,
                description,
                sections: this.createListSections(rows),
            })
            logger.info('📬 List sent: %o', { phone })
        } catch (error) {
            logger.error('❌ List sending failed: %o', { phone, error })
        }
    }

    private async sendImage(client: Whatsapp, phone: string, content: string[]) {
        const [path, title = 'imagem', caption = ''] = content;

        try {
            await client.sendImage(phone, path, title, caption)
            logger.info('📬 Image sent: %o', { phone })
        } catch (error) {
            logger.error('❌ Image sending failed: %o', { phone, error })
        }
    }

    // ###
    private createListSections(rows: string[]) {
        if (!rows?.length) {
            logger.error('🚫 Empty list')
            return []
        }

        const parsedRows = rows.map((row: string) => {
            const [rowId, title, description, category = 'cardápio'] = row.split('::')
            return { rowId, title, description, category }
        })

        const groupedRows = Object.groupBy(parsedRows, (row) => row.category)

        return Object.entries(groupedRows).map(([category, items]) => ({
            title: category.toUpperCase(),
            rows: items?.map(({ rowId, title, description }) => ({ rowId, title, description })),
        }))
    }
}