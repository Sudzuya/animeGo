<script setup>
import { AGListItem } from "./ui"
import { menuList } from "./api";
</script>

<template>
  <ul class="base-list">
    <a-g-list-item
        v-for="item in menuList"
        :item="item"
    />
  </ul>
</template>

<style scoped>
  .base-list {
    display: flex;
    align-items: center;

  }
</style>