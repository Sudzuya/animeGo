<script setup>

</script>

<template>
  <div class="default-layout">
    <div class="default-layout__container">
      <div class="default-layout__wrapper">
        <div class="default-layout__header">
          <slot name="header"></slot>
        </div>
        <div class="default-layout__content">
          <slot name="content"></slot>
        </div>
        <div class="default-layout__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.default-layout {
  height: 100%;
  &__container {
    height: 100%;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    &__content {
      flex: 1 1 auto;
    }

  }

}
</style>