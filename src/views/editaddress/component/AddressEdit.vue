<template>
  <AddressEdit v-if="JSON.stringify(addressInfo) !== {}"
               :addressInfo="addressInfo"
               @onSave="onSave"
               @onDelete="onDelete"></AddressEdit>
</template>

<script>
import { Notify } from 'vant';
import AddressEdit from '@/components/AddressEdit/index.vue';
import { areaCodeToChinese, ChineseToAreaCode } from '@/utils/areaCode';
import { getAddressId, updataAddress, deleteAddress } from '@/api/address';
export default {
  components: {
    AddressEdit,
  },
  data () {
    return {
      addressInfo: {}
    }
  },
  created () {
    this.getAddressIdData()
  },
  methods: {
    // 获取地址信息
    getAddressIdData () {
      getAddressId(this.$route.query.id).then(res => {
        const area = areaCodeToChinese([
          res.data.data.province,
          res.data.data.city,
          res.data.data.district
        ]).split(' ')
        this.addressInfo = {
          id: res.data.data.address_id,
          name: res.data.data.consignee,
          tel: res.data.data.telephone,
          province: area[0],
          city: area[1],
          county: area[2],
          areaCode: res.data.data.district,
          addressDetail: res.data.data.detail,
          postalCode: res.data.data.zipcode,
          isDefault: res.data.data.isDefault ? true : false,
        }
      }).catch(err => {
        console.log(err);
      })
    },
    onSave (addressInfo) {
      console.log(addressInfo);
      const area = [addressInfo.province, addressInfo.city, addressInfo.county]
      const address_region = ChineseToAreaCode(area)
      const data = {
        u_id: this.$store.getters.userInfo.u_id,
        address_id: addressInfo.id,
        consignee: addressInfo.name,
        telephone: addressInfo.tel,
        province: address_region[0],
        city: address_region[1],
        district: address_region[2],
        zipcode: addressInfo.postalCode,
        detail: addressInfo.addressDetail,
        isDefault: addressInfo.isDefault,
      }
      updataAddress(data).then(res => {
        console.log(res);
        if (res.data.code === 200) {
          this.$router.go(-1)
          Notify({ type: 'success', message: res.data.data, duration: 1000, });
        }
      }).catch(err => {
        console.log(err);
      })
    },
    onDelete () {
      const address_id = this.addressInfo.id
      deleteAddress(address_id).then(res => {
        console.log(res);
        this.$router.go(-1)
        Notify({ type: 'success', message: res.data.data, duration: 1000, });
      }).catch(err => {
        console.log(err);
      })
    }
  },
}
</script>

<style>
</style>