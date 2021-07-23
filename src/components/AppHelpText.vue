<template lang="pug">
span.text
  slot
</template>

<style lang="scss" scoped>
.text {
  @apply text-bluegray-400;
  @apply text-xs;
  @apply py-2;
  @apply block;
  @apply text-center;
  @screen md {
    @apply mt-6;
  }
  ::v-deep a {
    @apply text-bluegray-500;
    @apply font-medium;
  }
}
</style>
