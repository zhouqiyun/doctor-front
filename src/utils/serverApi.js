import axios from 'axios'
import router from '../router'
import common from './common'
/**
 * axios配置 响应时间  配置请求头  配置接口地址  自动带上cookie
*/
axios.defaults.timeout = 120000
axios.defaults.withCredentials = true
/**
 * http response 拦截器  返回接口返回的错误信息
*/
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      if (error.response.status === 401) {
        common.delCookie('Authorization')
        common.delCookie('gitlabUserId')
        router.push('/dashboard')
      } else if (error.response.status === 403) {
        router.push('/')
      }
    }
    return Promise.reject(error)
  }
)
/**
 * get请求
*/
function httpGet (url, params) {
  let promise = new Promise((resolve, reject) => {
    axios.get(url, { params: params }).then(
      (response) => {
        resolve(response.data)
      }
    ).catch(
      (error) => {
        reject(error)
      }
    )
  })
  return promise
}
/**
 * put请求
*/
function httpPut (url, params) {
  let promise = new Promise((resolve, reject) => {
    axios.put(url, params).then(
      (response) => {
        resolve(response.data)
      }
    ).catch(
      (error) => {
        reject(error)
      }
    )
  })
  return promise
}
/**
 * patch请求
*/
function httpPatch (url, params) {
  let promise = new Promise((resolve, reject) => {
    axios.patch(url, params).then(
      (response) => {
        resolve(response.data)
      }
    ).catch(
      (error) => {
        reject(error)
      }
    )
  })
  return promise
}
/**
 * post请求
*/
function httpPost (url, params) {
  let promise = new Promise((resolve, reject) => {
    axios.post(url, params).then(
      (response) => {
        resolve(response.data)
      }
    ).catch(
      (error) => {
        reject(error)
      }
    )
  })
  return promise
}
export default {
  httpGet,
  httpPost,
  httpPut,
  httpPatch
}
