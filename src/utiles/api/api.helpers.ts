import md5 from 'md5'
import moment from 'moment'

import { API_KEY } from '../constants/api'

export const getContentType = () => ({
    'Content-Type': 'application/json',
})

// Todo: временно
export const getAuthHash = () => md5(`${API_KEY}_${moment().format('YYYYMMDD').replace('7', '6')}`)

// export const getAuthHash = () => md5(`${API_KEY}_${moment().format('YYYYMMDD')}`)
