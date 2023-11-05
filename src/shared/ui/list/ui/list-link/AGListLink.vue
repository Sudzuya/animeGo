<script setup>

const props = defineProps({
   link: {
     type: Object,
   }
 })

</script>

<template>
  <router-link
      class="ag-list-link"
      :to="link.path"
  >
    {{ link.label }}
  </router-link>
</template>

<style scoped lang="scss">
  .ag-list-link {
    padding: 16px;
  }
</style>