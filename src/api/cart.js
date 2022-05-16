import {
  request
} from '@/utils/request';

// 添加购物车
export function addCart(data) {
  return request({
    url: '/api/forward/addcart',
    method: 'post',
    data
  })
}

// 查询购物车
export function getCart(u_id) {
  return request({
    url: '/api/forward/getcart',
    method: 'get',
    params: {
      u_id: u_id
    }
  })
}

// 修改购物车商品数量
export function updataCartNum(data) {
  return request({
    url: '/api/forward/updatacartnum',
    method: 'put',
    data
  })
}

// 删除购物车商品
export function deleteCart(cart_id) {
  return request({
    url: '/api/forward/deletecart',
    method: 'delete',
    params:{
      cart_id
    }
  })
}