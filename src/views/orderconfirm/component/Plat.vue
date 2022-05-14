<template>
  <div class="plat-Payment">
    <radio-group v-model="radio">
      <cell-group>
        <cell title="支付宝"
              clickable
              @click="radio = '1'">
          <template #icon>

          </template>
          <template #right-icon>
            <radio name="1" />
          </template>
        </cell>
        <cell title="微信"
              clickable
              @click="radio = '2'">
          <template #icon>

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
import { RadioGroup, Radio, Cell, CellGroup } from 'vant';
export default {
  components: {
    RadioGroup,
    Radio,
    Cell,
    CellGroup,
  },
  data () {
    return {
      radio: '1',
    }
  },
}
</script>

<style lang="less" scoped>
</style>