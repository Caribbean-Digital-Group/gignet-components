<template lang="pug">
.chip(:class="{ active }")
  .chip__icon(v-if="icon")
    i(:class="icon")
  span.chip__label {{ label }}
</template>

<script>
export default {
  props: {
    active: Boolean,
    label: String,
    icon: String,
  },
};
</script>

<style lang="scss" scoped>
.chip {
  @apply bg-bluegray-200;
  @apply text-bluegray-400;
  @apply inline-flex;
  @apply rounded-full;
  @apply px-4;
  @apply py-2;
  @apply items-center;
  @apply transition-all;
  @apply outline-none;
  @apply select-none;
  @apply cursor-pointer;
  &:hover,
  &:active {
    @apply bg-white;
    @apply text-bluegray-600;
  }

  &.active {
    @apply bg-white;
    @apply text-bluegray-600;
    &:hover,
    &:active {
      @apply bg-bluegray-200;
      @apply text-bluegray-400;
    }
  }

  i {
    @apply mr-2;
  }

  &__label {
    @apply text-sm;
  }
}
</style>
