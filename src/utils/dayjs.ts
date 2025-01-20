import dayjs from 'dayjs'

import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)

dayjs.locale('pt-br')

export { dayjs }
