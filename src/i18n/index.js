import locale from 'element-ui/lib/locale'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './langs/en'
import zh_Hant from './langs/zh_Hant'

Vue.use(VueI18n)

//将数据配置好
const messages = {
  en: Object.assign(en),
  zh_Hant: Object.assign(zh_Hant),
}
const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'en',
  messages,
  silentTranslationWarn: true
})
locale.i18n((key, value) => i18n.t(key, value)) //为了实现element插件的多语言切换

export default i18n
