import request from './request'

// 获取授权
export function login({ address, signed }) {
    return request({
        url: '/sendPhoneCode',
        data: { address, signed },
        method: 'post'
    })
}
