<template lang="pug">
AppCard
  .payment-status
    i.uil.uil-check-circle
    h2 {{ title }}
    p {{ subtitle  }}
    div
      slot
    router-link(:to="{ name: 'Login' }" v-slot="{ navigate }" custom)
      AppButton(:label="$t('payment.success_button')" @click="navigate")
</template>

<script>
import AppCard from "@/components/AppCard";
import AppButton from "@/components/AppButton";

export default {
  components: { AppCard, AppButton },
  props: {
    title: String,
    subtitle: String,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.payment-status {
  @apply flex;
  @apply flex-col;
  @apply items-center;
  @apply justify-center;
  i {
    @apply text-gignetgreen-400;
    @apply text-7xl;
  }
  h2 {
    @apply text-gignetgreen-400;
    @apply font-semibold;
    @apply mb-2;
  }
  p {
    @apply text-bluegray-400;
    @apply text-sm;
    @apply text-center;
    @apply mb-8;
  }
}
</style>
