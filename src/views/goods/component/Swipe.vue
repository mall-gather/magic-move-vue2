<template>
  <swipe class="my-swipe"
         @change="onChange">
    <swipe-item v-for="(item,index) in goods_carousel"
                :key="index">
      <img :src="item"
           @click="onClickImg(index)" />
    </swipe-item>
    <template #indicator>
      <div class="custom-indicator">{{ current + 1 }}/{{goods_carousel.length}}</div>
    </template>
  </swipe>
</template>

<script>
import { Swipe, SwipeItem, ImagePreview } from 'vant';
export default {
  components: {
    Swipe,
    SwipeItem,
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
  props: {
    goods_carousel: {
      type: Array,
      default: ()=>[]
    },
  },
  data () {
    return {
      current: 0,
    };
  },
  methods: {
    onChange (index) {
      this.current = index;
    },
    onClickImg (index) {
      ImagePreview({
        images: this.goods_carousel,
        startPosition: index,
        closeable: true,
      });
    }
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
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>