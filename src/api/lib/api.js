//api.js
import service from './request'

//用户登录


const login = data => {
  return service({
    url: '/userMain/login',
    method: 'post',
    data
  })
};





export {
  login,



}
