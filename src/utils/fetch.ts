import axios, { AxiosRequestConfig } from 'axios'
import { useToken, DEFAULT_OPTION } from 'vue3-auth'
import { extendAxiosCancel } from '@thinkvn/axios-cancel/lib/extendAxiosCancel'

declare module 'axios' {
  interface AxiosInstance {
    $request<T = any>(config: AxiosRequestConfig): Promise<T>
    $get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
    $delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
    $head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
    $options<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
    $post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
    $put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
    $patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  }
}

const instance = axios.create({
  // @ts-ignore
  baseURL: import.meta.env.VITE_BASE_URL,
})

// request interceptor
instance.interceptors.request.use((config: any) => {
  const { getToken } = useToken()
  const token = getToken()

  if (token) {
    config.headers[DEFAULT_OPTION.local.token.name] = token
  }

  return config
})

// response interceptor
instance.interceptors.response.use(response => {
  return response
})

// Request helpers ($get, $post, ...)
for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  // @ts-ignore
  instance['$' + method] = function () {
    // @ts-ignore
    // eslint-disable-next-line prefer-spread,prefer-rest-params
    return this[method].apply(this, arguments).then(res => res && res.data)
  }
}

extendAxiosCancel(instance)

export default instance
