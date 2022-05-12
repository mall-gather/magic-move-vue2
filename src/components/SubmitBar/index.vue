<template>
  <submit-bar :price="priceTotal*100"
              :disabled="isOnSubmit"
              button-text="提交订单"
              @submit="onSubmit">
    <checkbox v-model="checked"
              @change="onChange">全选</checkbox>
  </submit-bar>
</template>

<script>
import { SubmitBar, Checkbox } from 'vant';
export default {
  components: {
    SubmitBar,
    Checkbox,
  },
  props: {
    resultLength: {
      type: Number,
      default: 0
    },
    priceTotal: {
      type: Number,
      default: 0
    },
    isCheckedAll: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isOnSubmit: true,
      checked: false
    }
  },
  watch: {
    resultLength: {
      handler (val) {
        if (val > 0) {
          this.isOnSubmit = false
        } else {
          this.isOnSubmit = true
        }
      }
    },
    isCheckedAll: {
      handler (val) {
        this.checked = val
      }
    }
  },
  methods: {
    onChange () {
      this.$emit('checkAll', this.checked)
    },
    onSubmit () {
      this.$emit('onSubmit')
    }
  },
}
</script>

<style lang="less" scoped>
</style>