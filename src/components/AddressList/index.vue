<template>
  <address-list v-model="chosenAddressId"
                :list="list"
                :switchable="switchable"
                default-tag-text="默认"
                @add="onAdd"
                @edit="onEdit"
                @click-item="onclickItem">
    <template #default>
      <EmptyState class="empty-state"
                  v-if="isEmptyState"
                  :image="require('@/assets/image/address/address.png')"
                  description="您还没有添加过地址哦～"></EmptyState>
    </template>
  </address-list>
</template>

<script>
import { AddressList } from 'vant';
import EmptyState from '@/components/EmptyState/index.vue';
export default {
  components: {
    AddressList,
    EmptyState,
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    switchable: {
      type: Boolean,
      default: false
    },
    addressId: {
      type: String || Number,
      default: null
    }
  },
  data () {
    return {
      isEmptyState: true,
      chosenAddressId: null,
    };
  },
  watch: {
    list: {
      immediate: true,
      handler (val) {
        if (val.length > 0) {
          this.isEmptyState = false
        } else {
          this.isEmptyState = true
        }
      }
    },
    addressId: {
      immediate: true,
      handler (val) {
        this.chosenAddressId = val
      }
    }
  },
  methods: {
    onAdd () {
      this.$emit('onAdd')
    },
    onEdit (item, index) {
      this.$emit('onEdit', item, index)
    },
    onclickItem (item, index) {
      this.$emit('onclickItem', item, index)
    }
  },
}
</script>

<style lang="less" scoped>
</style>