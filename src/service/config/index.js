// 区分开发环境和生产环境
let BASE_URL = ''
if (import.meta.env.PROD) {
  // 生产环境
  BASE_URL = 'http://localhost:9000'
} else {
  // 开发环境
  BASE_URL = 'http://localhost:8000'
}
const TIME_OUT = 10000
export { BASE_URL ,TIME_OUT }