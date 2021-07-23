<template lang="pug">
div
  AppCard
    .payment(v-if="service")
      .payment__title {{ invoice.name }}
      .payment__plan {{ service.plan_id[1] }}
      .payment__total(v-html="totalHtml")

  AppCard.mt-4(v-if="hasCards")
    .select__title {{ $t("common.card") }}
    .select
      .select__option(@click="section = 1" :class="{selected: section === 1}")
        i.uil.uil-list-ul
        span {{ $t("credit_card.select") }}
      .select__option(@click="section = 2" :class="{selected: section === 2}")
        i.uil.uil-keyboard
        span {{ $t("credit_card.write") }}
  AppCardSelector(@select="submitForm" :loading="loading" :cards="cards" :buttonText="$t('quickpayment.pay')" v-if="section === 1 && hasCards")
  AppCard.mt-4(v-if="section === 2 || !hasCards")
    AppAlert.mb-4(:title="$t('quickpayment.error_title')" :subtitle="$t('quickpayment.error_subtitle')" v-if="hasError")
    AppCardForm(@submit="submitForm" :loading="loading" :buttonText="$t('quickpayment.pay')" :checkboxText="$t('invoices.confirm')" showCheckbox)
</template>

<script>
import { computed, ref } from "vue";
import { numberFormatter } from "@/utils/formatters";

import AppAlert from "@/components/AppAlert";
import AppCard from "@/components/AppCard";
import AppCardForm from "@/components/Card/AppCardForm";
import AppCardSelector from "@/components/Card/AppCardSelector";

export default {
  components: { AppAlert, AppCard, AppCardForm, AppCardSelector },
  props: {
    service: [Object, null],
    invoice: [Object, null],
    loading: {
      type: Boolean,
      default: false,
    },
    cards: {
      type: [Array, null],
      default: () => [],
    },
    hasError: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["pay"],
  setup(props, { emit }) {
    const section = ref(1);

    const hasCards = computed(() => {
      return props.cards?.length;
    });

    const totalHtml = computed(() => {
      let total = props.invoice.amount_residual;
      total = `${numberFormatter(total)}`;

      return `${total} MXN`;
    });

    const submitForm = (e) => {
      return emit("pay", e);
    };

    return { submitForm, totalHtml, section, hasCards };
  },
};
</script>

<style lang="scss" scoped>
.payment {
  @apply text-center;
  &__plan {
    @apply text-bluegray-500;
    @apply text-sm;
    @apply mb-1;
    @apply mt-3;
  }
  &__total {
    @apply text-bluegray-500;
    @apply text-2xl;
  }
  &__title {
    @apply text-bluegray-500;
    @apply text-base;
    @apply font-medium;
    @apply mt-1;
  }
}

.select {
  @apply flex;
  &__title {
    @apply font-semibold;
    @apply text-bluegray-400;
    @apply mb-2;
    @apply text-xs;
    @apply uppercase;
  }
  &__option {
    @apply flex;
    @apply flex-1;
    @apply flex-col;
    @apply text-sm;
    @apply items-center;
    &.selected {
      i {
        @apply text-gignetgreen-400;
      }
      span {
        @apply text-bluegray-700;
      }
    }
    i {
      @apply text-2xl;
      @apply text-bluegray-500;
      @apply transition-all;
    }
    span {
      @apply text-center;
      @apply text-bluegray-500;
      @apply font-medium;
      @apply transition-all;
    }
  }
}
</style>
