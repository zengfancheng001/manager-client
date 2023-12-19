import ZFCRequest from '../request/request'

export function loginRequest(account) {
  return ZFCRequest.post({
    url:'/login',
    data:account
  })
}