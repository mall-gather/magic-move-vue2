<template>
  <div class="add-address">
    <NavBar></NavBar>
    <AddressEdit></AddressEdit>
  </div>
</template>

<script>
import NavBar from './component/NavBar.vue';
import AddressEdit from './component/AddressEdit.vue';
export default {
  components: {
    NavBar,
    AddressEdit,
  },
}
</script>

<style lang="less" scoped>
.add-address{
  height: 100vh;
}
</style>