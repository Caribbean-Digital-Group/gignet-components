<template lang="pug">
form.new-card(@submit.prevent="submitForm")
  AppFormInput.card-input(type="number" :label="$t('credit_card.number')" name="number" maxlength="16" required)
  AppRow
    AppFormInput(type="month" :label="$t('credit_card.expires')" name="exp_date" required)
    AppFormInput.mb-2(type="password" :label="$t('credit_card.cvc')" name="cvc" maxlength="4" required)
  AppCheckbox(:label="checkboxText" v-model="checkvalue" v-if="checkboxText")
  AppButton(:loading="loading" :label="buttonText" :disabled="loading || (!checkboxText ? false : !checkvalue)")
</template>

<script>
import AppRow from "@/components/AppRow";
import AppButton from "@/components/AppButton";
import AppFormInput from "@/components/Form/AppFormInput";
import AppCheckbox from "@/components/Form/AppCheckbox";
import { ref } from "vue";

export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    buttonText: String,
    checkboxText: {
      type: String,
    },
  },
  components: { AppFormInput, AppButton, AppRow, AppCheckbox },
  emits: ["submit"],
  setup(props, { emit }) {
    const checkvalue = ref(false);

    const submitForm = async (e) => {
      try {
        const formData = {};
        const body = new FormData(e.target);

        body.forEach((value, key) => (formData[key] = value));

        const exp_date = formData.exp_date.split("-");

        formData.exp_year = exp_date[0];
        formData.exp_month = exp_date[1];
        delete formData.exp_date;

        emit("submit", formData);
      } catch (error) {
        console.log(error);
      }
    };

    return { submitForm, checkvalue };
  },
};
</script>

.
<style lang="scss" scoped>
.card-input ::v-deep input {
  @apply tracking-widest;
}
</style>
