<template>
  <address-edit :area-list="areaList"
                :address-info="addressInfo"
                show-postal
                :show-delete="this.$route.name === 'editaddress'"
                show-set-default
                :area-columns-placeholder="['请选择', '请选择', '请选择']"
                @save="onSave"
                @delete="onDelete" />
</template>

<script>
import { AddressEdit } from 'vant';
import { areaList } from '@vant/area-data';
export default {
  components: {
    AddressEdit,
  },
  props: {
    addressInfo: {
      type: Object,
      default: () => { }
    },
  },
  data () {
    return {
      areaList,
    };
  },
  methods: {
    onSave (addressInfo) {
      this.$emit('onSave', addressInfo)
    },
    onDelete () {
      this.$emit('onDelete')
    },
  },
}
</script>

<style>
</style>