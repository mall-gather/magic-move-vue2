import {
  request
} from '@/utils/request';
import qs from 'qs';
const md5 = require('md5');

// 登录
export function login(data) {
  return request({
    url: '/api/forward/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify({
      telephone: data.telephone,
      password: md5(data.password)
    })
  })
}

// 注册
export function register(data) {
  return request({
    url: '/api/forward/register',
    method: 'post',
    data: {
      username:data.username,
      telephone: data.telephone,
      password: md5(data.password)
    }
  })
}