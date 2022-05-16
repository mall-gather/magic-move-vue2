export const sharesheetMixins ={
  data() {
    return {
      showShare: false,
      options: [
        {
          name: '客服',
          icon: require('@/assets/image/service.png'),
        },
        {
          name: '商品',
          icon: require('@/assets/image/shop.png'),
        },
      ],
    }
  },
}