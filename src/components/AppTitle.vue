<template lang="pug">
.title(v-if="store.APP_TITLE")
  .title__back(v-if="store.APP_BACK_BUTTON" @click="goBack")
    i.uil.uil-angle-left
  h3.app-title {{ store.I118N_TITLE ? $t(store.APP_TITLE) : store.APP_TITLE }}
</template>

<script>
import { useRouter } from "vue-router";

import { store } from "@/store";

export default {
  props: {
    back: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const router = useRouter();
    const goBack = () => {
      const { GO_TO_HOME } = store;

      return GO_TO_HOME ? router.push({ name: "Home" }) : router.go(-1);
    };
    return { store, goBack };
  },
};
</script>

<style lang="scss" scoped>
.title {
  @apply flex;
  @apply mb-6;
  .app-title {
    @apply text-xl;
    @apply font-semibold;
    @apply text-bluegray-600;
    @apply flex;
    @apply items-center;
    @screen md {
      @apply text-2xl;
    }
  }
  &__back {
    @apply bg-white;
    @apply rounded-full;
    @apply h-8;
    @apply w-8;
    @apply flex;
    @apply items-center;
    @apply justify-center;
    @apply text-bluegray-500;
    @apply mr-2;
    @apply transition-all;
    @apply cursor-pointer;
    &:hover {
      @apply bg-gignetgreen-500;
      @apply text-white;
    }
  }
}
</style>
