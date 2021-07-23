<template>
  <input
    class="input"
    :class="{ disabled }"
    type="month"
    :name="name"
    :required="required"
    :disabled="disabled"
    :min="today"
  />
</template>

<script>
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
  },
  setup() {
    const d = new Date();
    const month = d.getMonth() < 9 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
    const today = `${d.getFullYear()}-${month}`;

    return { today };
  },
};
</script>
