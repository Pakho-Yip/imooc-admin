import request from '@/utils/request'
/**
 *  登录
 *  return promise
 */
export const login = (data) => {
  return request({
    url: '/login/pwd',
    method: 'POST',
    data
  })
}
