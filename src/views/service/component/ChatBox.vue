<template>
  <div class="chat-box">
    <div class="input-box">
      <field v-model="value"
             placeholder="请输入用户名" />
    </div>
    <div class="send-button">
      <van-button round
                  :disabled="value === ''"
                  @click="onClickSend"
                  type="info">发送</van-button>
    </div>
  </div>
</template>

<script>
import { Field, Button as VanButton } from 'vant';
export default {
  components: {
    Field,
    VanButton,
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onClickSend() {
      console.log('发送');
    }
  },
}
</script>

<style lang="less" scoped>
.chat-box {
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  .input-box {
    flex: 1;
  }
  .send-button {
    margin: 0 20px;
  }
}
</style>