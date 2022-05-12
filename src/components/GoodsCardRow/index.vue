<template>
  <card num="1"
        :price="price.toFixed(2)"
        :desc="desc"
        :title="title"
        :thumb="thumb">
    <template #num>
      <stepper :value="value"
               theme="round"
               button-size="24px"
               async-change
               @change="onChange" />
    </template>
  </card>
</template>

<script>
import { Card, Stepper, Toast } from 'vant';
export default {
  components: {
    Card,
    Stepper,
  },
  props: {
    thumb: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0.00
    },
    num: {
      type: Number,
      default: 0
    },
  },
  data () {
    return {
      value: 1
    }
  },
  watch: {
    num: {
      handler (val) {
        this.value = val
      }
    }
  },
  methods: {
    onChange (value) {
      Toast.loading({ forbidClick: true });

      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        Toast.clear();
        // 注意此时修改 value 后会再次触发 change 事件
        this.value = value;
      }, 500);
    },
  },
}
</script>

<style lang="less" scoped>
.van-card {
  background-color: #fff;
  flex: 1;
  padding-left: 0;
}
</style>