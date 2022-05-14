<template>
  <div class="plat-Payment">
    <radio-group v-model="radio" @change="onChangeRadio">
      <cell-group>
        <cell title="支付宝"
              clickable
              @click="radio = '1'">
          <template #icon>
            <icon size="24px" :name="require('@/assets/image/pay/zfbpay.png')" />
          </template>
          <template #right-icon>
            <radio name="1" />
          </template>
        </cell>
        <cell title="微信"
              clickable
              @click="radio = '2'">
          <template #icon>
            <icon size="24px" :name="require('@/assets/image/pay/wxpay.png')" />
          </template>
          <template #right-icon>
            <radio name="2" />
          </template>
        </cell>
      </cell-group>
    </radio-group>
  </div>
</template>

<script>
import { RadioGroup, Radio, Cell, CellGroup, Icon } from 'vant';
export default {
  components: {
    RadioGroup,
    Radio,
    Cell,
    CellGroup,
    Icon,
  },
  data () {
    return {
      radio: '1',
    }
  },
  methods: {
    onChangeRadio() {
      this.$emit('onChangeRadio',this.radio)
    }
  },
}
</script>

<style lang="less" scoped>
.van-icon{
  padding: 0 10px 0 0;
}
</style>