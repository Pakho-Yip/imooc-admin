import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  headers: {
    TerminalModule: 'TCTMS_MANAGE'
  },
  timeout: 5000
})

export default service
