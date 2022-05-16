<template>
  <card :num="num"
        :price="price.toFixed(2)"
        :desc="desc"
        :title="title"
        :thumb="thumb"
        @click="onClickCard">
    <template v-if="isStepper"
              #num>
      <div @click.stop>
        <stepper :value="value"
                 theme="round"
                 button-size="24px"
                 async-change
                 @change="onChangeNum" />
      </div>
    </template>
    <template #footer>
      <slot name="footer"></slot>
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
    id: {
      type: Number,
      default: null
    },
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
    isStepper: {
      type: Boolean,
      default: true
    },
  },
  data () {
    return {
      value: 1
    }
  },
  watch: {
    num: {
      immediate: true,
      handler (val) {
        this.value = val
      }
    }
  },
  methods: {
    onClickCard () {
      this.$emit('onClickCard', this.id)
    },
    onChangeNum (value) {
      
      this.value = value;
      this.$emit('onChangeNum',value,this.id)
    },
  },
}
</script>

<style lang="less" scoped>
.van-card {
  background-color: #fff;
  flex: 1;
  padding-left: 0;
  margin-top: 0;
}
</style>