import request from "./request"
import store from "@/store"
const Base64 = require("js-base64").Base64

import axios from "axios"

// 加载URL内容
export function loadFromUrl(url) {
    return axios.get(url)
}

// 获取授权
export function login({ address, signed, uuid }) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/login",
        params: { address, signed, uuid },
        method: "post",
    })
}

// 获取用户信息
export function getUserInfo() {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/getUserInfo",
        method: "post",
    })
}

// 每日签到
export function checkIn(signed) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/checkIn",
        params: { signed },
        method: "post",
    })
}

// 获取当日阅读奖励
export function getTodayReadData() {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/getTodayReadData",
        method: "post",
    })
}

// 检查是否有盲盒开
export function checkBlindBox() {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/checkHasBox",
        method: "get",
    })
}

// 接收盲盒
export function getBlindBox(signed, get_box_flag, tokenId) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/getBox",
        params: { signed, get_box_flag, tokenId },
        method: "post",
    })
}

// 打开盲盒
export function openBlindBox(open_box_flag, hashTx) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/openBox",
        params: { open_box_flag, hashTx },
        method: "post",
    })
}

// 上传文件
export function uploadFile(file) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/uploadFile",
        data: file,
        method: "post",
    })
}

// 上传JSON
export function uploadJson(jsonData) {
    var result = Base64.encode(JSON.stringify(jsonData))
    var fomData = new FormData()
    fomData.append("jsonData", result)
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/uploadJson",
        data: fomData,
        method: "post",
    })
}

// 上传文本
export function uploadContent(textData) {
    var result = Base64.encode(textData)
    var fomData = new FormData()
    fomData.append("contentData", result)
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/uploadContent",
        data: fomData,
        method: "post",
    })
}

//加密URL
export function encryptContent(url) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/encryptContent",
        params: { url },
        method: "post",
    })
}

//解密URL
export function unlockContent(encrypted, tokenId) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/unlockContent",
        params: { encrypted, tokenId },
        method: "post",
    })
}

// NFT Types
export function getNftTypes() {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/getNftTypes",
        method: "get",
    })
}

// NFT 分类
export function getNftCategoriesByType(type) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/getNftCategoriesByType",
        params: { type },
        method: "get",
    })
}

// NFT-language
export function getNftLanguage() {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/getNftLanguages",
        method: "get",
    })
}

// getNftPlatformsByType
export function getNftPlatformsByType(type) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/getNftPlatformsByType",
        params: { type },
        method: "get",
    })
}

// 更新用户资料
export function updateUserInfo(data) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/updateUserInfo",
        params: data,
        method: "post",
    })
}

// 我的NFT列表
export function getMyNftList(param) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/myNfts",
        method: "post",
        params: param,
    })
}

// NFT列表
export function nftListPage(params) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/nftList",
        method: "post",
        params: params,
    })
}

// 获取历史更改URI
export function nftUpdateLog(tokenId, page) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/nftUpdateLog",
        method: "post",
        params: { tokenId, page },
    })
}

// 获取挂单列表
export function getNftOrders(page, tokenId) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/nftOrders",
        method: "post",
        params: { page, tokenId },
    })
}

// 获取交易历史（近10条）
export function getNftTransactions(tokenId) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/getNftTransactions",
        method: "post",
        params: { tokenId },
    })
}

// 通知后端更新列表
export function notifyUpdateOrder(tokenId) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/notifyUpdateOrder",
        method: "post",
        params: { tokenId },
    })
}

// 质押解押通知
export function notifyPledge(tokenId) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/notifypledge",
        method: "post",
        params: { tokenId },
    })
}

// 质押待结算列表
export function pledgeSettleList(page) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/pledgeSettleList",
        method: "post",
        params: { page },
    })
}

// 首页精选
export function selectedList() {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/selectedList",
        method: "post",
    })
}

// 首页热门
export function hotNewsList() {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/hotList",
        method: "post",
    })
}

// 获取创作者信息
export function getOtUserInfo(address) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/getOtUserInfo",
        method: "post",
        params: { address },
    })
}

// 关注
export function follow(be_uid) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/followUser",
        method: "post",
        params: { be_uid },
    })
}

// 取消关注
export function unfollow(be_uid) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/unfollowUser",
        method: "post",
        params: { be_uid },
    })
}

// 获取NFT信息
export function getNftInfo(tokenId) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/nftInfo",
        method: "post",
        params: { tokenId },
    })
}

// 我的待结算账户
export function getPledgeSettleAccount() {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/walletinfo",
        method: "post",
    })
}

// 执行结算
export function accountSettle(signed) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/settle",
        method: "post",
        params: { signed },
    })
}

// 合约签到
export function contractSign(txhash) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/checkInByTxhash",
        method: "post",
        params: { txhash },
    })
}

// 合约获取盲盒
export function contractGetBox(txhash) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/getBoxByTxhash",
        method: "post",
        params: { txhash },
    })
}

// 合约打开盲盒
export function contractOpenBox(txhash, open_box_flag) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/openBoxByTxhash",
        method: "post",
        params: { txhash, open_box_flag },
    })
}

// 查询广告列表 1 全站  2首页
export function getAdList(type) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/getAds",
        method: "post",
        params: { type },
    })
}

// 查询用户的NFT列表
export function getUserNftList(params) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/userNfts",
        method: "post",
        params: params,
    })
}

// 大盘数据
export function getStatistics() {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/marketData",
        method: "post",
    })
}

// 计划结算列表
export function createSettleList(page) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/createSettleList",
        method: "post",
        params: { page },
    })
}

// 创作作品列表
export function createrNftList(param) {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/createrNftList",
        method: "post",
        params: param,
    })
}

// 查询今日是否签到
export function isCheckIn() {
    return request({
        baseURL:
            process.env["VUE_APP_BASE_URL" + "_" + store.state.chain.chainId],
        url: "/isCheckIn",
        method: "post",
    })
}
