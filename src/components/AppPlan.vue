<template lang="pug">
router-link(:to="{ name: 'PlanDetails', params: { id: plan.id } }" v-slot="{ navigate }" custom)
  app-card(@click="navigate")
    .plan
      .plan__icon(:class="plan.estatus.toLowerCase()")
        i.uil(:class="icon")
      .plan__info
        .plan__tipo \#{{ plan.no_contrato }}
        .plan__name {{ plan.plan_id[1] }}
        //- .plan__domicilio {{ plan.domicilio_servicio }}
        //- .plan__status {{ plan.estatus }}
        //- .plan__id {{ plan.id }}
        .plan__row
          .plan__fecha
            h4 {{ $t("plan.estatus") }}
            span {{ plan.estatus.toLowerCase() }}
          .plan__fecha
            h4 {{ $t("plan.next_invoice") }}
            span {{ plan.fecha_proxima_factura }}
      .plan__arrow
        i.uil.uil-angle-right
</template>

<script>
import AppCard from "@/components/AppCard";
import { computed } from "@vue/runtime-core";
import { capitalize } from "@/utils/formatters";

export default {
  components: { AppCard },
  props: {
    plan: Object,
  },
  setup(props) {
    const icon = computed(() => {
      const iconos = {
        activo: "uil-file",
      };

      return iconos[props.plan.estatus.toLowerCase()];
    });

    return { icon, capitalize };
  },
};
</script>

<style lang="scss" scoped>
.plan {
  @apply flex;
  @apply items-center;
  @apply h-full;
  @apply cursor-pointer;

  &__info {
    @apply flex-1;
    @apply overflow-hidden;
  }

  &__icon {
    @apply w-12;
    @apply h-12;
    @apply rounded-lg;
    @apply items-center;
    @apply justify-center;
    @apply mr-3;
    @apply hidden;
    @screen sm {
      @apply flex;
    }

    i {
      @apply text-2xl;
    }

    &.activo {
      @apply bg-gignetgreen-200;
      i {
        @apply text-gignetgreen-600;
      }
    }
  }

  &__row {
    @apply flex;
    @apply flex-col;
    @screen sm {
      @apply flex-row;
      @apply items-center;
    }
  }

  &__name {
    @apply text-bluegray-700;
    @apply font-medium;
  }

  &__domicilio {
    @apply text-sm;
    @apply truncate;
    @apply text-bluegray-500;
    @apply mb-1;
  }

  &__id {
    @apply text-bluegray-400;
    @apply uppercase;
    @apply text-xs;
    @apply mr-4;
  }

  &__tipo {
    @apply text-bluegray-600;
    @apply text-xs;
    @apply mb-2;
    @apply tracking-wide;
  }

  &__fecha {
    @apply flex;
    @apply flex-col;
    @apply text-xs;
    & + & {
      @apply mt-2;
      @screen sm {
        @apply mt-0;
        @apply ml-6;
      }
    }
    h4 {
      @apply font-medium;
      @apply text-bluegray-600;
    }
    span {
      @apply text-bluegray-500;
      @apply capitalize;
    }
  }

  &__arrow {
    @apply text-3xl;
    @apply text-bluegray-300;
  }
}
</style>
