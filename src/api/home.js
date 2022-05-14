import {
  request
} from '@/utils/request';

// 商品列表
export function getGoodsList(currentPage, pageSize) {
  return request({
    url: '/api/forward/querygoods',
    method: 'GET',
    params: {
      currentPage,
      pageSize
    }
  })
}