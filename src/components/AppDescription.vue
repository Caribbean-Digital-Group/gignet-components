<template lang="pug">
.description
  label {{ label }}
  span {{ description}}
</template>

<script>
export default {
  props: {
    label: String,
    description: [String, Number, Boolean],
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.description {
  @apply text-xs;
  @apply flex;
  @apply flex-col;
  label {
    @apply text-bluegray-700;
    @apply font-semibold;
    @apply mb-1;
    @apply leading-none;
    word-spacing: 9999999px;
    @screen sm {
      word-spacing: initial;
    }
  }
  span {
    @apply text-bluegray-600;
  }
}
</style>
