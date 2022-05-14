<template>
  <popup v-model="show"
         round
         :closeable="closeable"
         @closed="onClosed"
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
    closeable:{
      type:Boolean,
      default:false
    }
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
    onClosed(){
      this.$emit('onClosed')
    },
  },
}
</script>

<style lang="less" scoped>
.van-popup {
  height: 50%;
}
</style>