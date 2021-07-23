<template lang="pug">
.card
  .card__title(v-if="title") {{ title }}
  .card__body
    slot
</template>

<script>
export default {
  props: { title: String },
};
</script>

<style lang="scss" scoped>
.card {
  @apply bg-white;
  @apply p-4;
  @apply rounded-xl;
  @apply border-bluegray-200;
  @apply shadow-bluegray-400-lg;
  @apply relative;
  @apply overflow-hidden;
  @apply cursor-pointer;

  &__body {
    @apply h-full;
  }

  &__title {
    @apply font-semibold;
    @apply text-bluegray-500;
    @apply text-2xl;
    @apply mb-3;
  }
}
</style>
