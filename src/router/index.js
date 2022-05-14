import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/layout'
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    children: [{
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
      },
      // 废弃
      // {
      //   path: '/categories',
      //   name: 'categories',
      //   component: () => import('@/views/categories/index.vue'),
      // },
      {
        path: '/shoppingcart',
        name: 'shoppingcart',
        meta: {
          title: '购物车',
          requiresAuth: true
        },
        component: () => import('@/views/shoppingcart/index.vue'),
      },
      {
        path: '/me',
        name: 'me',
        meta: {
          title: '我的',
          requiresAuth: true
        },
        component: () => import('@/views/me/index.vue'),
      }
    ]
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
  // 注册
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/index.vue'),
  },
  // 订单列表
  {
    path: '/order',
    name: 'order',
    meta: {
      title: '订单列表',
      requiresAuth: true
    },
    component: () => import('@/views/order/index.vue'),
  },
  // 订单详情
  {
    path: '/orderdetails',
    name: 'orderdetails',
    meta: {
      title: '订单详情',
      requiresAuth: true
    },
    component: () => import('@/views/orderdetails/index.vue'),
  },
  // 商品
  {
    path: '/goods',
    name: 'goods',
    component: () => import('@/views/goods/index.vue'),
  },
  // 优惠券
  {
    path: '/coupon',
    name: 'coupon',
    meta: {
      title: '优惠券',
      requiresAuth: true
    },
    component: () => import('@/views/coupon/index.vue'),
  },
  // 收货地址
  {
    path: '/address',
    name: 'address',
    meta: {
      title: '收货地址',
      requiresAuth: true
    },
    component: () => import('@/views/address/index.vue'),
  },
  // 添加收货地址
  {
    path: '/addaddress',
    name: 'addaddress',
    meta: {
      title: '添加收货地址',
      requiresAuth: true
    },
    component: () => import('@/views/addaddress/index.vue'),
  },
  // 编辑收货地址
  {
    path: '/editaddress',
    name: 'editaddress',
    meta: {
      title: '编辑收货地址',
      requiresAuth: true
    },
    component: () => import('@/views/editaddress/index.vue'),
  },
  // 提交订单
  {
    path: '/orderconfirm',
    name: 'orderconfirm',
    meta: {
      title: '提交订单',
      requiresAuth: true
    },
    component: () => import('@/views/orderconfirm/index.vue'),
  },
  // 联系客服
  {
    path: '/service',
    name: 'service',
    meta: {
      title: '联系客服',
      requiresAuth: true
    },
    component: () => import('@/views/service/index.vue'),
  },

]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router