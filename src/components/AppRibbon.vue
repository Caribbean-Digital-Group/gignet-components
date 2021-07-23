<template lang="pug">
.ribbon(:class="type") {{ label }}
</template>

<script>
export default {
  props: {
    label: String,
    type: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.ribbon {
  @apply absolute;
  @apply top-4;
  @apply -right-14;
  @apply transform;
  @apply rotate-45;
  @apply text-xs;
  @apply w-40;
  @apply text-center;
  @apply z-10;
  @apply h-6;
  @apply leading-6;
  @apply tracking-wide;
  &.success {
    @apply bg-green-400;
    @apply text-white;
  }
  &.error {
    @apply bg-red-400;
    @apply text-white;
  }
  &.info {
    @apply bg-yellow-400;
    @apply text-white;
  }
}
</style>
