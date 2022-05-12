<template>
  <swipe :autoplay="3000"
         class="my-swipe"
         :show-indicators="false">
    <swipe-item v-for="(image, index) in images"
                :key="index">
      <img :src="image" />
    </swipe-item>
  </swipe>
</template>

<script>
import { Swipe, SwipeItem  } from 'vant';
export default {
  components: {
    Swipe,
    SwipeItem,
  },
  data () {
    return {
      images: [
        'https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/04/29/ec8adbf14428d2a73adf077919115f91_9131913416118501680.jpg',
        'https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/05/01/4e546d9e93c70d2465c9f740396ef5b3_1264543245356158487.jpg',
      ],
    };
  },
}
</script>

<style lang="less" scoped>
.my-swipe {
  .van-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>