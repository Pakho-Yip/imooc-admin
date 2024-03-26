import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  headers: {
    TerminalModule: 'TCTMS_MANAGE'
  },
  timeout: 5000
})

// 响应拦截器
service.interceptors.response.use(
  // 请求成功
  (response) => {
    console.log(response)
    const { success, message, result } = response.data
    // 需要判断当前请求是否成功
    if (success) {
      // 成功返回解析后的数据
      return result
    } else {
      // 失败（请求成功，业务失败），消息提示
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  // 请求失败
  (error) => {
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)
export default service
