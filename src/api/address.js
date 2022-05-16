import {
  request
} from '@/utils/request';

// 查询用户收货地址
export function getAddress(u_id) {
  return request({
    url: '/api/forward/getaddress',
    method: 'GET',
    params: {
      u_id
    }
  })
}

// 地址id查询收货地址
export function getAddressId(address_id) {
  return request({
    url: '/api/forward/getaddress',
    method: 'GET',
    params: {
      address_id
    }
  })
}

// 添加收货地址
export function addAddress(data) {
  return request({
    url: '/api/forward/addaddress',
    method: 'post',
    data
  })
}

// 修改收货地址
export function updataAddress(data) {
  return request({
    url: '/api/forward/updataaddress',
    method: 'put',
    data
  })
}

// 删除收货地址
export function deleteAddress(address_id) {
  return request({
    url: '/api/forward/deleteaddress',
    method: 'delete',
    params:{
      address_id
    }
  })
}