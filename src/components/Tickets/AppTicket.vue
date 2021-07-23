<template lang="pug">
app-card
  .ticket
    .ticket__id
      | Ticket 
      span \#{{ ticket.id }}
    .ticket__title {{ ticket.name }}
    .ticket__service {{ $t("common.service")}}: {{ ticket.x_studio_servicio[1] }}
    .ticket__service {{ $t("ticket.create_date")}}: {{ dateFormatter(ticket.create_date) }}
    .ticket__service(v-if="ticket.close_date") {{ $t("ticket.close_date")}}: {{ dateFormatter(ticket.close_date)}}
    .ticket__status {{ ticket.stage_id[1] }}
</template>

<script>
import AppCard from "@/components/AppCard";
import { dateFormatter } from "@/utils/formatters";
export default {
  props: { ticket: Object },
  components: { AppCard },
  setup() {
    const randomId = () => {
      return `#${Math.random().toString(36).substring(7)}`;
    };

    return { randomId, dateFormatter };
  },
};
</script>

<style lang="scss" scoped>
.ticket {
  &__id {
    @apply text-bluegray-400;
    @apply text-xs;
    span {
      @apply uppercase;
    }
  }
  &__title {
    @apply text-bluegray-600;
  }
  &__service {
    @apply text-xs;
    @apply text-bluegray-500;
  }
  &__status {
    @apply text-xs;
    @apply text-gignetgreen-600;
    @apply font-medium;
  }
}
</style>
