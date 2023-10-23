import request from './request';
const Base64 = require('js-base64').Base64

// 获取授权
export function login({ address, signed, uuid }) {
    return request({
        url: '/login',
        params: { address, signed, uuid },
        method: 'post'
    })
}

// 上传JSON
export function uploadJson(jsonData) {
    var result = Base64.encode(jsonData);
    return request({
        url: '/uploadJson',
        params: { jsonData: result },
        method: 'post'
    })
}
