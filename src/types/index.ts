// 字符串字面量类型
export type Method =
  | 'get'
  | 'GET'
  | 'head'
  | 'HEAD'
  | 'post'
  | 'POST'
  | 'patch'
  | 'PACTH'
  | 'option'
  | 'OPTION'
  | 'delete'
  | 'DELETE'
  | 'put'
  | 'PUT'

// 定义一个 axios 的请求参数接口类型
export interface AxiosRequestConfig {
  url: string
  method: Method
  data?: any
  params?: any
  headers?: any
  timeout?: number
  // responseType 的类型是一个 XMLHttpRequestResponseType 类型
  // 它的定义是 "" | "arraybuffer" | "blob" | "document" | "json" | "text" 字符串字面量类型。
  responseType?: XMLHttpRequestResponseType
}

export interface AxiosResponse {
  data: any // 服务端返回的数据
  status: number // 状态码
  statusText: string // 状态消息
  headers: any // 响应头
  config: AxiosRequestConfig // 请求配置对象
  request: any // 请求对象实例
}

// axios 函数返回的是一个 Promise 对象，我们可以定义一个 AxiosPromise 接口
// 它继承于 Promise<AxiosResponse> 这个泛型接口
export interface AxiosPromise extends Promise<AxiosResponse> {}

// 定义 AxiosError 类型接口，用于外部使用
export interface AxiosError extends Error {
  config: AxiosRequestConfig
  code?: string
  request?: any
  response?: AxiosResponse
  isAxiosError: boolean
}
