import axios, { AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://api.nicepick.co.kr/api'
      : 'http://3.37.27.220/api', //'http://localhost:3000/api',
})

export default instance
