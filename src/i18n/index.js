import { createI18n } from 'vue-i18n'
import zhLocale from './lang/zh'
import enLocale from './lang/en'
const messages = {
  en: {
    msg: {
      // test: 'hello world'
      ...enLocale
    }
  },
  zh: {
    msg: {
      // test: '你好世界'
      ...zhLocale
    }
  }
}
const locale = 'zh'

const i18n = createI18n({
  // 使用 composition API
  legacy: false,
  // 全局使用 t 函数
  globalInjection: true,
  locale,
  messages
})

export default i18n