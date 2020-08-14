import axios from 'axios'

export function require (config) {
  const intance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 5000
  })
  // 请求拦截器
  axios.interceptors.request.use(config => {
    return config
  }, error => {
    return Promise.reject(error)
  })
  // 响应拦截器
  axios.interceptors.response.use(response => {
    return response.data
  }, error => {
    return Promise.reject(error)
  })
  return intance(config)
}
