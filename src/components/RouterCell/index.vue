<template>
  <cell :title="title"
        :icon="icon"
        :is-link="isLink"
        :clickable="false"
        @click="onCell"
        :to="url"
        size="large">
    <template #label>
      <slot name="label"></slot>
    </template>
    <template #extra>
      <slot name="extra"></slot>
    </template>
  </cell>
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
    url: {
      type: String,
      default: ''
    },
    isLink: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onCell () {
      this.$emit('onCell')
    }
  },
}
</script>

<style>
</style>