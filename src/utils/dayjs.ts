import dayjs from 'dayjs'

import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'

import 'dayjs/locale/pt-br'

dayjs.extend(customParseFormat)
dayjs.extend(relativeTime)

dayjs.locale('pt-br')

export { dayjs }
