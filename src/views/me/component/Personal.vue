<template>
  <div class="personal">
    <van-image round
               width="5rem"
               height="5rem"
               src="https://img01.yzcdn.cn/vant/cat.jpeg" />
    <div class="content">
      <div class="user">xianyu</div>
      <div class="user-id">123</div>
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
    .user-id{
      font-size: 16px;
      margin: 5px 0 0 0;
    }
  }
}
</style>