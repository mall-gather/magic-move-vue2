<template>
  <div class="address">
    <NavBar></NavBar>
    <AddressList></AddressList>
  </div>
</template>

<script>
import NavBar from './component/NavBar.vue';
import AddressList from './component/AddressList.vue';
export default {
  components: {
    NavBar,
    AddressList,
  },
}
</script>

<style lang="less" scoped>

</style>