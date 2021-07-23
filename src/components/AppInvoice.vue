<template lang="pug">
AppCard
  .invoice__name {{ invoice.name }}
  AppRibbon(v-bind="invoiceStatus(invoice)")
  AppRow
    AppDescription(:label="$t('invoices.invoice_date')" :description="dateFormatter(invoice.invoice_date)")
    AppDescription(:label="$t('invoices.amount_total')" :description="numberFormatter(invoice.amount_total)")
    AppDescription(:label="$t('invoices.amount_residual')" :description="numberFormatter(invoice.amount_residual)")
</template>

<script>
import { useI18n } from "vue-i18n";

import { dateFormatter, numberFormatter } from "@/utils/formatters";

import AppCard from "@/components/AppCard";
import AppDescription from "@/components/AppDescription";
import AppRibbon from "@/components/AppRibbon";
import AppRow from "@/components/AppRow";

export default {
  components: { AppCard, AppDescription, AppRibbon, AppRow },
  props: {
    invoice: Object,
  },
  setup() {
    const { t } = useI18n();

    const invoiceStatus = (invoice) => {
      if (invoice.invoice_payment_state == "paid") {
        return { type: "success", label: t("invoices.paid") };
      }

      if (invoice.state == "cancel") {
        return { type: "error", label: t("invoices.cancelled") };
      }

      return { type: "info", label: t("invoices.not_payed") };
    };

    return { dateFormatter, numberFormatter, invoiceStatus };
  },
};
</script>

<style lang="scss" scoped>
.invoice__name {
  @apply text-xs;
  @apply text-bluegray-400;
  @apply mb-2;
  @apply font-medium;
}
</style>
