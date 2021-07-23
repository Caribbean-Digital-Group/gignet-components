<template>
  <select :name="name" class="input" @change="onChange">
    <option
      v-for="(option, index) in options"
      :value="option.value"
      :key="index"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
    },
    name: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const onChange = (data) => {
      console.log(data.target.value);
      emit("input", data);
    };

    return { onChange };
  },
};
</script>
