<template lang="pug">
.alert
  .alert__title {{ title }}
  .alert__subtitle {{ subtitle }}
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
  },
};
</script>

<style lang="scss" scoped>
.alert {
  @apply bg-red-400;
  @apply px-2;
  @apply py-2;
  @apply rounded-md;
  @apply text-white;
  @apply text-sm;
  &__title {
    @apply text-sm;
    @apply font-semibold;
  }
  &__subtitle {
    @apply text-xs;
  }
}
</style>
