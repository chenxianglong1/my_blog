import request from "./request"

// 获取登录地址
export function getRoute(data: any) {
  return request({
    url: '/mc/be/console/sso-login/route',
    method: 'get',
    data
  })
}