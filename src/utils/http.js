import request from './request';
const Base64 = require('js-base64').Base64

import axios from 'axios';


// 加载URL内容
export function loadFromUrl(url) {
    return axios.get(url)
}

// 获取授权
export function login({ address, signed, uuid }) {
    return request({
        url: '/login',
        params: { address, signed, uuid },
        method: 'post'
    })
}

// 上传文件
export function uploadFile(file) {
    return request({
        url: '/uploadFile',
        data: file,
        method: 'post'
    })
}

// 上传JSON
export function uploadJson(jsonData) {
    var result = Base64.encode(JSON.stringify(jsonData))
    return request({
        url: '/uploadJson',
        params: { jsonData: result },
        method: 'post'
    })
}

// 上传文本
export function uploadContent(textData) {
    var result = Base64.encode(textData)
    return request({
        url: '/uploadContent',
        params: { contentData: result },
        method: 'post'
    })
}

//加密URL
export function encryptContent(url) {
    return request({
        url: '/encryptContent',
        params: { url },
        method: 'post'
    })
}

//解密URL
export function unlockContent(encrypted, tokenId) {
    return request({
        url: '/unlockContent',
        params: { encrypted, tokenId },
        method: 'post'
    })
}

// NFT Types
export function getNftTypes() {
    return request({
        url: '/getNftTypes',
        method: 'get'
    })
}

// NFT 分类
export function getNftCategoriesByType(type) {
    return request({
        url: '/getNftCategoriesByType',
        params: { type },
        method: 'get'
    })
}

// NFT-language
export function getNftLanguage() {
    return request({
        url: '/getNftLanguages',
        method: 'get'
    })
}

// getNftPlatformsByType
export function getNftPlatformsByType(type) {
    return request({
        url: '/getNftPlatformsByType',
        params: { type },
        method: 'get'
    })
}
