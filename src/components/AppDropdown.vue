<template lang="pug">
.dropdown(
  @blur="closeDropdown"
  :class="classList"
  v-click-outside="closeDropdown"
)
  slot
  transition(name="checkbox-fade")
    .dropdown__container(v-show="modelValue")
      slot(name="content")
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    autoContainer: {
      type: Boolean,
      default: false,
    },
    autoContent: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const closeDropdown = () => {
      emit("update:modelValue", false);
    };
    const classList = computed(() => {
      return {
        "dropdown--autocontainer": props.autoContainer,
        "dropdown--autocontent": props.autoContent,
      };
    });
    return {
      closeDropdown,
      classList,
    };
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  $self: &;
  &--autocontainer {
    @apply w-max;
  }
  &--autocontent #{$self}__container {
    @apply w-max;
  }
  &__container {
    @apply bg-white;
    @apply absolute;
    @apply inset-x-0;
    @apply top-20;
    @apply border;
    @apply border-bluegray-200;
    @apply shadow-lg;
    @apply rounded-md;
    @apply overflow-hidden;
    @apply origin-top;
    @apply mx-4;
    @apply z-20;
    @screen md {
      @apply w-72;
      @apply left-0;
      @apply top-32;
    }
  }
}
@keyframes toggleDropdown {
  0% {
    transform: rotateX(-90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}
.checkbox-fade {
  &-enter-active {
    animation: toggleDropdown 0.2s;
  }
  &-leave-active {
    animation: toggleDropdown 0.2s reverse;
  }
}
</style>
