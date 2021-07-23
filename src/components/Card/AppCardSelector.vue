<template lang="pug">
form(@submit.prevent="submit").pb-4
  AppCard.my-4
    .credit_cards
      .cc(v-for="(card, index) in cards" @click="selectCard(index)")
        .cc__left
          .cc__top <span>{{ card.brand }}</span> con terminación <span>{{ card.last4 }}</span>
          .cc__bottom EXP: <span>{{ card.exp_month }}</span>/<span>{{ card.exp_year }}</span>
        .cc__right
          i.uil.uil-check(:class="{ selected: selectedCardIndex === index }")
  
  AppCard.mt-4
    AppFormInput(type="password" name="cvc" label="CVC")
    AppCheckbox(:label="$t('invoices.confirm')" v-model="checkvalue")
    AppButton(:loading="loading" :label="buttonText" :disabled="selectedCardIndex === null || !checkvalue")
</template>

<script>
import { ref } from "vue";
import AppCard from "@/components/AppCard";
import AppButton from "@/components/AppButton";
import AppFormInput from "@/components/Form/AppFormInput";
import AppCheckbox from "@/components/Form/AppCheckbox";
import AppHelpText from "@/components/AppHelpText";

export default {
  components: { AppCard, AppButton, AppFormInput, AppCheckbox, AppHelpText },
  props: {
    loading: Boolean,
    buttonText: String,
    cards: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["select"],
  setup(props, { emit }) {
    const selectedCardIndex = ref(null);
    const checkvalue = ref(false);

    const selectCard = (index) => {
      selectedCardIndex.value = index;
    };

    const submit = (e) => {
      const formData = {};
      const body = new FormData(e.target);

      body.forEach((value, key) => (formData[key] = value));

      emit("select", {
        cvc: formData.cvc,
        id_pm: props.cards[selectedCardIndex.value].id,
      });
    };

    return { selectedCardIndex, selectCard, submit, checkvalue };
  },
};
</script>

<style lang="scss" scoped>
.credit_cards {
  @apply grid;
  @apply gap-3;
}
.cc {
  @apply flex;
  @apply text-xs;
  @apply items-center;
  @apply justify-between;
  @apply text-bluegray-700;
  &__top span {
    @apply font-bold;
  }
  &__bottom span {
    @apply font-medium;
  }
  &__right {
    @apply text-white;
    @apply text-3xl;
    @apply w-12;
    @apply text-center;
    @apply transition-all;
    .selected {
      @apply text-gignetgreen-400;
    }
  }
  & + & {
    @apply pt-3;
    @apply border-t;
    @apply border-bluegray-100;
  }
}
</style>
