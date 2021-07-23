<template lang="pug">
.guest_menu
  template(v-for="item in options")
    router-link.guest_menu__item(:to="{ name: item.route }" v-if="item.route")
      i(:class="item.icon")
      span {{ item.label }}
    a.guest_menu__item(:href="`tel:${item.url}`" v-else)
      i(:class="item.icon")
      span {{ item.label }}
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.guest_menu {
  @apply bg-white;
  @apply bg-opacity-70;
  @apply w-full;
  @apply rounded-md;
  @apply flex;
  @apply justify-between;
  @apply overflow-hidden;
  @apply max-w-md;
  &__item {
    @apply py-3;
    @apply px-2;
    @apply flex;
    @apply flex-1;
    @apply flex-col;
    @apply items-center;
    i {
      @apply text-4xl;
      @apply text-gignetgreen-400;
      @apply mb-1;
    }
    span {
      @apply text-center;
      @apply text-bluegray-500;
      @apply font-medium;
      @apply text-xs;
    }

    &:active {
      @apply bg-bluegray-200;
    }
  }
}
</style>
