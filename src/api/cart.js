import {request} from '@/utils/request';

// 添加购物车
export function addCart(data){
  return request({
    url:'/api/forward/addcart',
    method:'post',
    data
  })
}