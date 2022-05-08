<template>
  <div class="personal">
    <van-image round
               width="5rem"
               height="5rem"
               src="https://img01.yzcdn.cn/vant/cat.jpeg" />
    <div class="content">
      <div>登录/注册</div>
    </div>
  </div>
</template>

<script>
import { Image as VanImage } from 'vant';
export default {
  components: {
    VanImage,
  },
}
</script>

<style lang="less" scoped>
.personal {
  background-color: #fff;
  padding: 20px;
  margin: 0 0 10px 0;
  display: flex;
  align-items: center;
  .content{
    margin: 0 0 0 20px;
    font-size: 18px;
  }
}
</style>