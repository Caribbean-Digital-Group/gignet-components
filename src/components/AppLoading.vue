<template lang="pug">
.loading
  i.uil.uil-spinner-alt
</template>

<style lang="scss" scoped>
.loading {
  @apply flex;
  @apply items-center;
  @apply justify-center;
  @apply inset-x-0;
  @apply h-full;
  @apply relative;

  i {
    @apply inline-block;
    @apply animate-spin-slow;
    @apply text-gignetgreen-400;
    @apply text-6xl;
  }
}
</style>
