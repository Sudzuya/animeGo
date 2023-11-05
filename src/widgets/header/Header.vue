<script setup>
import {AGList} from "@ui";

</script>

<template>
<div class="header">
  <div class="header__logo">
    <slot name="logo"></slot>
  </div>
  <div class="header__menu">
    <AGList/>
  </div>
  <div class="header__navigation">
    <slot name="navigation"></slot>
  </div>
</div>
</template>

<style scoped lang="scss">
  .header {
    display: flex;
    align-items: center;
    height: 42px;
    position: relative;
    &:before{
      content: "";
      position: absolute;
      left: 50%;
      top: 0;
      width: 100vw;
      height: 100%;
      translate: -50% 0;
      background-color: $dark;
      z-index: -1;
    }
    &:after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 100vw;
      height: 4px;
      translate: -50% 0;
      background-color: $red;
      z-index: -1;
    }
  }
</style>