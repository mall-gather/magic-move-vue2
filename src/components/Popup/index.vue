<template>
  <popup v-model="show"
         round
         position="bottom">
         <slot></slot>
  </popup>
</template>

<script>
import { Popup } from 'vant';
export default {
  components: {
    Popup,
  },
  props: {
    isPopup: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      show: false
    }
  },
  watch: {
    isPopup: {
      handler (val) {
        this.show = val
      }
    },
    show: {
      handler (val) {
        this.$emit('update:isPopup', val)
      }
    }
  },
  methods: {
  },
}
</script>

<style lang="less" scoped>
.van-popup {
  height: 50%;
}
</style>