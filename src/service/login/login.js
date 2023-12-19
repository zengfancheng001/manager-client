import ZFCRequest from '../request/request'

export function loginRequest(account) {
  console.log(account);
  return ZFCRequest.post({
    url:'/login',
    data:account
  })
}