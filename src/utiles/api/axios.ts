import axios, { CreateAxiosDefaults } from 'axios'

import { API_BASE_URL } from '../constants/api'

import { getAuthHash, getContentType } from './api.helpers'

const axiosOptions: CreateAxiosDefaults = {
    baseURL: API_BASE_URL,
    headers: getContentType(),
}

export const axiosClassic = axios.create(axiosOptions)

export const instance = axios.create(axiosOptions)

instance.interceptors.request.use((config) => {
    config.headers['X-Auth'] = getAuthHash()
    
    return config
})
