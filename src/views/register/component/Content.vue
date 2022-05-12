<template>
  <div class="content">
    <van-form @submit="onSubmit">
      <van-field v-model="telephone"
                 type="tel"
                 name="手机号"
                 label="手机号"
                 placeholder="手机号"
                 :rules="[{ required: true, message: '请填写手机号' }]" />
      <van-field v-model="password"
                 type="password"
                 name="密码"
                 label="密码"
                 placeholder="密码"
                 :rules="[{ required: true, message: '请填写密码' }]" />
      <van-field v-model="passwordReset"
                 type="password"
                 name="重新输入密码"
                 label="重新输入密码"
                 placeholder="重新输入密码"
                 :rules="[
                 {validator:validatorPasswordReset,message:'两次密码不一致'},
                 { required: true, message: '请填写密码' },
                 ]" />
      <div style="margin: 16px;">
        <van-button round
                    block
                    type="info"
                    native-type="submit">登录</van-button>
      </div>
    </van-form>
    <!-- <MaskLayer :show.sync="show">
      <VerificationCode></VerificationCode>
    </MaskLayer> -->
  </div>
</template>

<script>
import { Form as VanForm, Field as VanField, Button as VanButton, Dialog } from 'vant';
import VerificationCode from '@/components/VerificationCode/index.vue';
import MaskLayer from '@/components/MaskLayer/index.vue';
export default {
  components: {
    VanForm,
    VanField,
    VanButton,
    [Dialog.Component.name]: Dialog.Component,
    VerificationCode,
    MaskLayer,
  },
  data () {
    return {
      show: false,
      telephone: '',
      password: '',
      passwordReset: '',
    };
  },
  methods: {
    validatorPasswordReset (val) {
      if (this.password == val) {
        return true
      } else {
        return false
      }
    },
    onSubmit (values) {
      console.log('submit', values);
      this.show = true
    },
  },
}
</script>

<style lang="less" scoped>
</style>