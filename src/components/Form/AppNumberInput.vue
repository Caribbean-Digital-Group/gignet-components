<template>
  <input
    class="input"
    :class="{ disabled }"
    type="number"
    :name="name"
    autocomplete="new-password"
    :required="required"
    :disabled="disabled"
    :min="min"
    :max="max"
    @input="onInput"
    @keypress="onKeypress"
    ref="numberInput"
    inputmode="decimal"
  />
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    name: {
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
    exactlength: {
      type: [String, Number, null],
      default: null,
    },
    maxlength: {
      type: [String, Number, null],
      default: null,
    },
    min: {
      type: [String, Number, null],
      default: null,
    },
    max: {
      type: [String, Number, null],
      default: null,
    },
  },
  setup(props) {
    const numberInput = ref(null);
    const value = ref("");

    const onKeypress = (e) => {
      if (e.keyCode == 69 || e.keyCode == 101) {
        console.log("prevent");
        e.preventDefault();
      }
    };

    const onInput = (e) => {
      if (props.maxlength) {
        if (e.target.value.length > props.maxlength) {
          numberInput.value.setCustomValidity("hey");
        } else {
          numberInput.value.setCustomValidity("");
        }
      }

      // if (props.exactlength) {
      //   if (`${e.target.value}`.length == props.exactlength) {
      //     numberInput.value.setCustomValidity("");
      //   } else {
      //     numberInput.value.setCustomValidity("hey");
      //   }
      // }
    };

    return { onInput, onKeypress, numberInput, value };
  },
};
</script>
