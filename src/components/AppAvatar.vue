<template lang="pug">
.avatar
  i.uil.uil-user
</template>

<style lang="scss" scoped>
.avatar {
  @apply bg-bluegray-400;
  @apply rounded-full;
  @apply w-10;
  @apply h-10;
  @apply flex;
  @apply text-bluegray-100;
  @apply justify-center;
  @apply items-center;
  &:hover {
    cursor: pointer;
  }
  i {
    @apply text-lg;
  }
  @screen md {
    @apply bg-gignetgreen-100;
    @apply text-gignetgreen-600;
  }
}
</style>
