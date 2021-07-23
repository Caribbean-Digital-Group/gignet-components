<template lang="pug">
form(@submit.prevent="submitForm" v-if="!formSent")
  AppCard(:title="$t('userOptions.forgotPass')")
    AppFormInput(type="email" :label="$t('lead.email')" name="email_user" required)
    AppButton.mb-0(:loading="loading" :disabled="loading" :label="$t('common.send')")
AppAlertCard(:title="$t('password_reset.valid_email')" :subtitle="$t('password_reset.check_mail')" v-else)
</template>

<script>
import { onMounted, ref } from "vue";

import AppAlertCard from "@/components/AppAlertCard";
import AppButton from "@/components/AppButton";
import AppFormInput from "@/components/Form/AppFormInput";
import AppCard from "@/components/AppCard";

import { store } from "@/store";
import { axios } from "@/utils/axios";

export default {
  components: { AppAlertCard, AppFormInput, AppButton, AppCard },
  setup() {
    const formSent = ref(false);
    const loading = ref(false);

    const submitForm = async (e) => {
      try {
        loading.value = true;

        const body = new FormData(e.target);

        await axios.post("contact/reset_password", body);

        formSent.value = true;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = true;
      }
    };

    onMounted(async () => {
      try {
        store.APP_LOADING = true;
        formSent.value = false;
      } finally {
        store.APP_LOADING = false;
      }
    });

    return {
      loading,
      submitForm,
      formSent,
    };
  },
};
</script>
