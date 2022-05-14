import {
  request
} from '@/utils/request';
import qs from 'qs';
const md5 = require('md5');

export function login(data) {
  return request({
    url: '/api/forward/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify({
      account: data.account,
      password: md5(data.password)
    })
  })
}