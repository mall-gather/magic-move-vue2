<template>
  <div class="describe">
    <span class="title">{{title}}</span>
    <span class="pic">￥{{pic}}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    pic: {
      type: Number,
      default: null
    },
  },
}
</script>

<style lang="less" scoped>
.describe {
  padding: 0 10px;
  background-color: #fff;
  span {
    display: block;
    line-height: 1.5;
    padding: 5px 0;
  }
  .pic {
    font-weight: bold;
  }
}
</style>