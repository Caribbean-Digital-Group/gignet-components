<template>
  <textarea class="input" :name="name" :rows="rows" required></textarea>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    rows: {
      type: Number,
      default: 4,
    },
  },
};
</script>
