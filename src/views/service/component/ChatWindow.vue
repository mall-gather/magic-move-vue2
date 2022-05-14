<template>
  <div class="chat-window">
    <div class="bubble">123</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.chat-window{
  padding: 10px 10px 0;
  box-sizing: border-box;
  height: calc(100vh - 96px);
  overflow: auto;
  .bubble{
    display: inline-block;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
  }
}
</style>