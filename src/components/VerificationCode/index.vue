<template>
  <Verify @success="alert('success')"
          @error="alert('error')"
          :type="verify.type"
          :mode="verify.mode"
          :vOffset="verify.vOffset"
          :vSpace="verify.vSpace"
          :explain="verify.explain"
          :imgUrl="verify.imgUrl"
          :imgName="verify.imgName"
          :imgSize="verify.imgSize"
          :blockSize="verify.blockSize"
          :barSize="verify.barSize"
          :showButton="verify.showButton"></Verify>
</template>

<script>
import Verify from 'vue2-verify'
export default {
  components: {
    Verify,
  },
  data () {
    return {
      // 验证码
      verify: {
        // 验证码类型
        type: 4,
        // 验证码的显示方式
        mode: 'fixed',
        // 滑动验证码的误差量，默认单位是px
        vOffset: 5,
        // 验证码图片和移动条容器的间隔，默认单位是px
        vSpace: 5,
        // 滑动条内的提示
        explain: '向右滑动完成验证',
        // 背景图片的地址
        imgUrl: '',
        // 验证码背景图的数组集合
        imgName: [
          require('@/assets/image/原神.jpg'),
        ],
        // 其中包含了width、height两个参数，分别代表图片的宽度和高度
        imgSize: {
          width: '350px',
          height: '208px',
        },
        // 其中包含了width、height两个参数，分别代表拼图块的宽度和高度
        blockSize: {
          width: '50px',
          height: '50px',
        },
        // 其中包含了width、height两个参数，分别代表滑动条的宽度和高度
        barSize: {
          width: '350px',
          height: '40px',
        },
        // 是否显示确定按钮
        showButton: false
      },
    }
  },
  methods: {
    alert(message) {
      console.log(message);
    }
  },
}
</script>

<style>
</style>