<script setup>

import {AGListLink} from "../list-link";

const props = defineProps({
  item: {
    type: Object,
  },
  link: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <li class="ag-list-item"
      v-if="link"
  >
    <a-g-list-link
      :link="item"
    />
  </li>
  <li class="ag-list-item"
      v-else
  >
    {{ item.label }}
  </li>
</template>

<style scoped lang="scss">
  .ag-list-item {
    color: $white;
  }
</style>