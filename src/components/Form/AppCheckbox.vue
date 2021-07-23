<template>
  <label class="label">
    <input
      type="checkbox"
      class="checkbox"
      :name="name"
      :class="{ disabled }"
      :required="required"
      :disabled="disabled"
      v-model="localValue"
      @change="change"
    />
    <span class="span">{{ label }}</span>
  </label>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: {
    name: {
      type: String,
    },
    modelValue: {
      type: Boolean,
    },
    label: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const localValue = ref(false);

    const change = () => {
      emit("update:modelValue", localValue.value);
    };

    return { change, localValue };
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  @apply rounded-md;
  @apply border-gray-300;
  @apply shadow-sm;
  @apply px-2;
  @apply py-2;
  @apply text-gignetgreen-400;
  @apply transition-all;
  @apply outline-none;
  &:focus:invalid {
    @apply border-red-300;
    @apply shadow-red-300-md;
  }
  &:focus {
    @apply border-gignetblue-300;
    @apply ring;
    @apply ring-gignetblue-200;
    @apply ring-opacity-50;
    @apply ring-offset-2;
  }

  &.disabled {
    @apply bg-bluegray-50;
    @apply text-bluegray-400;
  }
}

.label {
  @apply mb-3;
  @apply flex;
  @apply items-center;
}

.span {
  @apply text-bluegray-400;
  @apply text-xs;
  @apply ml-2;
  @apply leading-tight;
  @apply text-justify;
}
</style>
