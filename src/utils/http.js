import request from './request'

// 获取授权
export function login({ address, signed, uuid }) {
    return request({
        url: '/login',
        params: { address, signed, uuid },
        method: 'post'
    })
}
