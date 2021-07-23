<template>
  <button
    type="submit"
    class="button"
    :class="[color, { loading }]"
    :disabled="disabled"
  >
    <div class="whitespace-nowrap">
      <i v-if="responsive" class="uil uil-trash-alt md:hidden"></i>
      <div :class="{ responsive }" v-if="!loading">
        {{ label }}
      </div>
      <i class="uil uil-spinner-alt animate_login" v-else></i>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    responsive: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "primary",
      validator: function (value) {
        return ["primary", "warning", "danger"].indexOf(value) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  @apply text-white;
  @apply block;
  @apply text-base;
  @apply w-full;
  @apply py-2;
  @apply px-8;
  @apply text-center;
  @apply rounded-md;
  @apply outline-none;
  @apply transition-all;
  &:disabled {
    @apply cursor-not-allowed;
    &:hover {
      @apply cursor-not-allowed;
    }
  }
}

.animate_login {
  @apply inline-block;
  @apply animate-spin;
}

.primary {
  @apply bg-gignetblue-400;
  &:disabled {
    @apply bg-gignetblue-200;
    &:hover {
      @apply bg-gignetblue-200;
    }
  }
  &:hover {
    @apply bg-gignetblue-500;
  }
  &:active {
    @apply bg-gignetblue-400;
  }
}

.responsive {
  @apply inline-block;
  @apply invisible;
  font-size: 0px;
  @screen md {
    @apply visible;
    @apply text-base;
  }
}

.danger {
  @apply bg-red-400;
  &:disabled {
    @apply bg-red-200;
    &:hover {
      @apply bg-red-200;
    }
  }
  &:hover {
    @apply bg-red-500;
  }
  &:active {
    @apply bg-red-400;
  }
}
.loading {
  @apply bg-gignetblue-300 #{!important};
  @apply cursor-not-allowed;
}
</style>
