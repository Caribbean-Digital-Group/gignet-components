<template lang="pug">
.row
  slot
</template>

<style lang="scss" scoped>
.row {
  @apply grid;
  @apply auto-cols-fr;
  @apply grid-flow-col;
  @apply gap-4;
}
</style>
