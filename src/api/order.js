import {
  request
} from '@/utils/request';

// 提交订单
export function submitOrders(data) {
  return request({
    url: '/api/forward/submitorders',
    method: 'post',
    data
  })
}

// 查询用户订单
export function getUserOrderList(data) {
  return request({
    url: '/api/forward/getuserorderlist',
    method: 'get',
    params: {
      u_id: data.u_id,
      order_status: data.order_status
    }
  })
}