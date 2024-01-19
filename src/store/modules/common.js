const common = {
    state: {
        language: "en",
        theme: "dark",
        openAccount: false,
        openBuy: false,
        openConnect: false,
        openChainModal: false,
        isParticleProvider: false,
    },

    mutations: {
        setLanguage: (state, language) => {
            state.language = language
        },
        setTheme: (state, theme) => {
            state.theme = theme
        },
        setOpenAccount: (state, openAccount) => {
            state.openAccount = openAccount
        },
        setOpenBuy: (state, openBuy) => {
            state.openBuy = openBuy
        },
        setOpenConnect: (state, openConnect) => {
            state.openConnect = openConnect
        },
        setIsParticleProvider: (state, isParticleProvider) => {
            state.isParticleProvider = isParticleProvider
        },
        setOpenChain: (state, openChain) => {
            state.openChainModal = openChain
        },
    },
    actions: {
        /** 更新 */
        UpdateIsParticleProvider({ commit }, isParticleProvider) {
            commit("setIsParticleProvider", isParticleProvider)
        },
    },
}

export default common
