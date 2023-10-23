import i18n from '@/i18n'
import store from '@/store'
import { tansParams } from "@/utils/common"
import axios from 'axios'
import { Notification } from 'element-ui'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 50000
})
service.interceptors.request.use(
    config => {
        const token = store.state.user.token
        if (token) {
            config.headers['token'] = token
        }

        const lang = i18n.locale
        if (lang) {
            config.headers['lang'] = lang
        }

        if (config.method === 'get' && config.params) {
            let url = config.url + '?' + tansParams(config.params);
            url = url.slice(0, -1);
            config.params = {};
            config.url = url;
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    res => {
        const code = res.data.code
        const msg = res.data.message
        // 二进制数据则直接返回
        if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
            return res.data
        }
        if (code === 401) {
            Notification({
                title: msg,
                type: 'warning',
                position: 'bottom-right'
            })
            return Promise.reject(msg)
        } else if (code !== 1) {
            Notification({
                title: msg,
                type: 'warning',
                position: 'bottom-right'
            })
            return Promise.reject(msg)
        } else {
            return res.data
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default service
