<template>
  <AddressEdit @onSave="onSave"></AddressEdit>
</template>

<script>
import AddressEdit from '@/components/AddressEdit/index.vue';
export default {
  components: {
    AddressEdit,
  },
  mounted () {
    console.log(this.$route.query.index);;
  },
  methods: {
    onSave (addressInfo) {
      console.log(addressInfo);
    }
  },
}
</script>

<style>
</style>