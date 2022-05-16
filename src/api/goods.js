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

// id查商品
export function getGoods(id) {
  return request({
    url: '/api/forward/getgoods',
    method: 'GET',
    params: {
      goods_id:id
    }
  })
}

// id查规格
export function getSpecification(id) {
  return request({
    url: '/api/forward/getspecification',
    method: 'GET',
    params: {
      specification_id:id
    }
  })
}