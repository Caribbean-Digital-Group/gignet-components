<template lang="pug">
.cc.aspect-w-16.aspect-h-9
  .cc__container
    .flex.justify-between.items-center.text-white
      span.text-3xl.font-bold.uppercase
        img(:src="require(`@/assets/cards/${card.brand}.png`)")
      i.fa.fa-chevron-circle-up.fa-2x.text-gray-300
    .cc__numbers
      .cc__number-row(v-for="i in 4")
        span.cc__number(v-for="j in 4")
          span.cc__dot
      .cc__number-row
        span.cc__number(v-for="index in 4") {{ card.last4[index - 1] }}
    .flex.justify-between.items-center
      .cc__number-col
        span.cc__expires {{ $t("credit_card.expires") }}
        span.cc__expiration {{exp_month}}/{{exp_year}}

</template>

<script>
import { computed } from "vue";
export default {
  props: {
    card: Object,
  },
  setup(props) {
    const exp_month = computed(() => {
      const { exp_month } = props.card;
      return exp_month > 9 ? exp_month : "0" + exp_month;
    });

    const exp_year = computed(() => {
      return props.card.exp_year.toString().slice(-2);
    });

    return { exp_month, exp_year };
  },
};
</script>

<style lang="scss" scoped>
$self: &;
.cc {
  @apply rounded-lg;
  @apply shadow-bluegray-600-md;
  @apply bg-gradient-to-br;
  @apply from-bluegray-300;
  @apply via-bluegray-400;
  @apply to-bluegray-400;

  @screen md {
    @apply max-w-sm;
  }
  img {
    @apply w-auto;
    @apply -mt-2;
  }

  &__container {
    @apply w-full;
    @apply h-full;
    @apply p-6;
    @apply flex;
    @apply flex-col;
    @apply justify-between;
  }
  &__numbers {
    @apply flex;
    @apply justify-between;
    @apply items-center;
  }
  &__number-col {
    @apply flex;
    @apply flex-col;
  }
  &__number-row {
    @apply flex;
    @apply flex-row;
  }
  &__number {
    @apply text-bluegray-200;
    @apply text-sm;

    & + & {
      @apply ml-1;
    }
    @screen md {
      @apply font-semibold;
    }
  }
  &__dot {
    @apply bg-bluegray-200;
    @apply inline-block;
    @apply rounded-full;
    height: 6px;
    width: 6px;
    margin-bottom: 3px;
  }
  &__expiration {
    @apply text-bluegray-100;
    @apply text-sm;
  }
  &__expires {
    @apply text-bluegray-300;
    @apply text-xs;
  }
}
</style>
