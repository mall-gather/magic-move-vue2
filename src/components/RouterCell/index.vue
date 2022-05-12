<template>
  <cell :title="title" :icon="icon" is-link :clickable="false" @click="onCell" :to="url" size="large"/>
</template>

<script>
import { Cell } from 'vant';
export default {
  components: {
    Cell,
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    url:{
      type: String,
      default:''
    }
  },
  methods: {
    onCell() {
      this.$emit('onCell')
    }
  },
}
</script>

<style>

</style>