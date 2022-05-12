<template>
  <div class="empty">
    <empty :image="image" :description="description" />
  </div>
</template>

<script>
import { Empty } from 'vant';
export default {
  components: {
    Empty,
  },
  props: {
    image: {
      type: String,
      default: 'error'
    },
    description: {
      type: String,
      default: '描述文字'
    },
  },
}
</script>

<style>

</style>