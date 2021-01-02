import axios from 'axios'

export function request(config) {
  //1.创建实例
  const instace = axios.create({
    baseURL: 'http://152.136.185.210:8000//api/w6',
    timeout: 5000
  })
  //2.拦截器
  //请求拦截
  instace.interceptors.request.use(config => {
    // console.log(config)
    return config
  }, err => {
    console.log(err)
  });
  //响应拦截
  instace.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, err => {
    console.log(err)
  })

  //3.发送网络请求
  return instace(config)
}