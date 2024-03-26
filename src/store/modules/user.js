import { login } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    /**
     * 登录请求动作
     */
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          loginName: username,
          password: md5(username + password)
        })
          .then((data) => {
            console.log(data)
            this.commit('user/setToken', data.token)
            // 跳转
            router.push('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
