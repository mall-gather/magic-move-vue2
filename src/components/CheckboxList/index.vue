<template>
  <checkbox-group v-model="result"
                  ref="checkboxGroup"
                  @change="onChange"
                  checked-color="#ff6d6d">
                  <slot></slot>
  </checkbox-group>
</template>

<script>
import { CheckboxGroup } from 'vant';
export default {
  components: {
    CheckboxGroup,
  },
  props: {
  },
  data () {
    return {
      result: []
    }
  },
  methods: {
    onChange() {
      this.$emit('checkListData',this.result)
    }
  },
}
</script>

<style lang="less" scoped>
</style>