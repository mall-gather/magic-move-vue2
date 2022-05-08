<template>
  <cell :title="title" :icon="icon" is-link :clickable="false" :to="url" size="large"/>
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
}
</script>

<style>

</style>