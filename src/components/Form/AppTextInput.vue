<template>
  <input
    class="input"
    :class="{ disabled }"
    :type="type"
    :name="name"
    :pattern="pattern"
    autocomplete="new-password"
    :required="required"
    :disabled="disabled"
    :maxlength="maxlength"
    ref="textInput"
    @input="onInput"
  />
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  props: {
    type: {
      type: String,
    },
    name: {
      type: String,
    },
    pattern: {
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
    maxlength: {
      type: [String, Number, null],
      default: null,
    },
    exactValue: {
      type: String,
      default: null,
    },
  },

  setup(props) {
    const textInput = ref(null);

    const onInput = (e) => {
      if (props.exactValue) {
        if (e.target.value != props.exactValue) {
          textInput.value.setCustomValidity("hey");
        } else {
          textInput.value.setCustomValidity("");
        }
      }
    };

    return { textInput, onInput };
  },
};
</script>
