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

/**
 *  获取用户信息
 *  return promise
 */
export const getUserInfo = (data) => {
  console.log('执行', data)
  return request({
    url: '/account/info',
    method: 'POST',
    data
  })
}
