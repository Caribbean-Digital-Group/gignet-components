<template>
  <label class="form-input">
    <span class="label" v-if="label">{{ label }}</span>
    <component
      ref="refInput"
      :is="customComponent"
      v-bind="customProps"
      @input="$emit('update:value', $event.target.value)"
    />
  </label>
</template>

<script>
import CustomSelect from "@/components/Form/AppCustomSelect";
import CustomNumberInput from "@/components/Form/AppNumberInput";
import AppTextarea from "@/components/Form/AppTextarea";
import AppMonthInput from "@/components/Form/AppMonthInput";
import TextInput from "@/components/Form/AppTextInput";
import { shallowRef, onMounted, reactive, computed, ref } from "vue";

export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
    },
    label: {
      type: String,
    },
    options: {
      type: Array,
    },
    rows: {
      type: Number,
    },
    pattern: {
      type: String,
    },
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: [String, Number],
      default: null,
    },
    exactlength: {
      type: [String, Number],
      default: null,
    },
    exactValue: {
      type: [String, Number],
      default: null,
    },
  },
  setup(props) {
    const refInput = ref(null);
    const customComponent = shallowRef(null);
    const reactiveProps = reactive(props);
    const componentDefinition = {
      input: [
        "type",
        "name",
        "pattern",
        "value",
        "disabled",
        "required",
        "exactValue",
        "maxlength",
      ],
      number: [
        "name",
        "value",
        "disabled",
        "required",
        "exactlength",
        "maxlength",
        "min",
        "max",
      ],
      month: ["name", "required", "disabled"],
      select: ["name", "options"],
      textarea: ["name", "rows"],
    };

    const components = {
      input: TextInput,
      number: CustomNumberInput,
      month: AppMonthInput,
      select: CustomSelect,
      textarea: AppTextarea,
    };

    const getComponentType = (originalType) => {
      const inputTypes = ["text", "email", "password"];
      if (inputTypes.includes(originalType)) {
        return "input";
      } else {
        return originalType;
      }
    };

    const customProps = computed(() => {
      const type = getComponentType(props.type);
      const componentProps = componentDefinition[type];
      const obj = {};
      componentProps.forEach((key) => {
        obj[key] = reactiveProps[key];
      });
      return obj;
    });

    onMounted(() => {
      const type = getComponentType(props.type);
      customComponent.value = components[type];
    });

    return {
      customComponent,
      customProps,
      refInput,
    };
  },
};
</script>

<style lang="scss" scoped>
.form-input {
  @apply inline-block;
  @apply w-full;
}

.input {
  @apply mb-3;
  @apply block;
  @apply w-full;
  @apply rounded-md;
  @apply border-gray-300;
  @apply shadow-sm;
  @apply px-3;
  @apply py-2;
  @apply text-bluegray-700;
  @apply text-sm;
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

// .invalid {
//   @apply border-red-300;
//   @apply shadow-red-300-md;
// }

.label {
  @apply text-bluegray-400;
  @apply uppercase;
  @apply text-sm;
  @apply font-medium;
  @apply mb-2;
  @apply inline-block;
  @apply tracking-wide;
}
</style>
