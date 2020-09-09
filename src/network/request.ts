import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 5000
})
// 请求拦截，发送请求之前执行，一般用于页面添加请求时加载动画
instance.interceptors.request.use(config => {
  return config
}, err => {
  console.log(err);
})
// 响应拦截，请求返回后执行，一般用于过滤出真正需要的信息
instance.interceptors.response.use((res) => {
  return res.data
}, err => {
  console.log(err);
})
/**
 * GET 请求
 * @param url 请求路径
 * @param params 请求参数：{ }
 */
export const Get = (url: string, params?:{}) => instance.get(url,{params})

/**
 * POST 请求
 * @param url 请求路径
 * @param data 请求参数：{ }
 */
export const Post = (url: string, data?: {}) => instance.post(url,data)

/**
 * PUT 请求
 * @param url 请求路径
 * @param data 请求参数：{ }
 */
export const Put = (url: string,data: {}) => instance.put(url,data)

/**
 * DELETE 请求
 * @param url 请求路径
 * @param data 请求参数：{ }
 */
export const Del = (url: string,data: {}) => instance.delete(url,{data})