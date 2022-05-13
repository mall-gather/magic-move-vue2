<template>
  <div class="goods-details">
    <RouterCell title="商品详情"
                :isLink="false"></RouterCell>
    <van-image v-for="(item,index) in detailsList"
               :key="index"
               @click="onClickImage(index)"
               width="100%"
               height="100%"
               fit="contain"
               :src="item" />
  </div>
</template>

<script>
import { Image as VanImage, ImagePreview } from 'vant';
import RouterCell from '@/components/RouterCell/index.vue';
export default {
  components: {
    RouterCell,
    VanImage,
  },
  data () {
    return {
      detailsList: [
        'https://img01.yzcdn.cn/vant/cat.jpeg',
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ]
    }
  },
  methods: {
    onClickImage (index) {
      ImagePreview({
        images: this.detailsList,
        startPosition: index,
        closeable: true,
      });
    }
  },
}
</script>

<style lang="less" scoped>
.goods-details {
  margin: 10px 0 0 0;
  .van-image {
    display: block;
  }
}
</style>