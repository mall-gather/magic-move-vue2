<template>
  <AddressEdit @onSave="onSave"></AddressEdit>
</template>

<script>
import { Notify } from 'vant';
import AddressEdit from '@/components/AddressEdit/index.vue';
import { ChineseToAreaCode } from '@/utils/areaCode';
import { addAddress } from '@/api/address';
export default {
  components: {
    AddressEdit,
  },
  methods: {
    onSave (addressInfo) {
      console.log(addressInfo);
      const area = [addressInfo.province, addressInfo.city, addressInfo.county]
      const address_region = ChineseToAreaCode(area)
      const data = {
        u_id: this.$store.getters.userInfo.u_id,
        consignee: addressInfo.name,
        telephone: addressInfo.tel,
        province: address_region[0],
        city: address_region[1],
        district: address_region[2],
        zipcode: addressInfo.postalCode,
        detail: addressInfo.addressDetail,
        isDefault: addressInfo.isDefault,
      }

      addAddress(data).then(res => {
        console.log(res);
        if (res.data.code === 200) {
          this.$router.go(-1)
          Notify({ type: 'success', message: res.data.data, duration: 1000, });
        }
      }).catch(err => {
        console.log(err);
      })
    }
  },
}
</script>

<style>
</style>