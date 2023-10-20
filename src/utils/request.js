import store from '@/store'
import { getToken } from '@/utils/auth'
import cache from '@/utils/cache'
import { tansParams } from "@/utils/common"
import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 对应国际化资源文件后缀
// axios.defaults.headers['Content-Language'] = 'zh_CN'
// 創建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: process.env.VUE_APP_BASE_URL,
    // 超时
    timeout: 50000
})

// request interceptor
service.interceptors.request.use(
    config => {

        // 是否需要防止数据重复提交
        const isRepeatSubmit = (config.headers || {}).repeatSubmit === false

        const auth = getToken()
        if (auth) {
            config.headers['Authorization'] = 'Bearer ' + auth
        }


        // get请求映射params參數
        if (config.method === 'get' && config.params) {
            let url = config.url + '?' + tansParams(config.params);
            url = url.slice(0, -1);
            config.params = {};
            config.url = url;
        }

        if (!isRepeatSubmit && (config.method === 'post' || config.method === 'put')) {
            const requestObj = {
                url: config.url,
                data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
                time: new Date().getTime()
            }
            const sessionObj = cache.session.getJSON('sessionObj')
            if (sessionObj === undefined || sessionObj === null || sessionObj === '') {
                cache.session.setJSON('sessionObj', requestObj)
            } else {
                const s_url = sessionObj.url;                  // 请求地址
                const s_data = sessionObj.data;                // 请求数据
                const s_time = sessionObj.time;                // 请求時間
                const interval = 1000;                         // 间隔時間(ms)，小于此時間视为重复提交
                if (s_data === requestObj.data && requestObj.time - s_time < interval && s_url === requestObj.url) {
                    const message = '数据正在處理，请勿重复提交';
                    console.warn(`[${s_url}]: ` + message)
                    return Promise.reject(new Error(message))
                } else {
                    cache.session.setJSON('sessionObj', requestObj)
                }
            }
        }
        return config
    },
    error => {
        // do something with request error
        // console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    res => {
        const code = res.data.code
        const msg = res.data.message
        // 二进制数据则直接返回
        if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
            return res.data
        }
        if (code === 401) {
            store.dispatch('LogOut').then(() => {
                location.href = process.env.VUE_APP_CONTEXT_PATH + "login";
            })
        } else if (code !== 1) {
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
