<template lang="pug">
form(@submit.prevent="submitForm" v-if="!formSent")
  AppCard(:title="$t('password_reset.button')")
    AppFormInput(type="password" :label="$t('changePass.new')" name="new_password" required)
    AppFormInput(type="password" :label="$t('changePass.confirm')" name="confirm_password" required)
    AppButton.mb-0(:loading="loading" :disabled="loading" :label="$t('common.send')")
AppAlertCard(:title="$t('password_reset.success')" :subtitle="$t('password_reset.password_changed')" v-else)
</template>

<script>
import { onMounted, ref } from "vue";
import { useGtag } from "vue-gtag-next";

import AppAlertCard from "@/components/AppAlertCard";
import AppButton from "@/components/AppButton";
import AppFormInput from "@/components/Form/AppFormInput";
import AppCard from "@/components/AppCard";

import { store } from "@/store";
import { axios } from "@/utils/axios";

export default {
  components: { AppAlertCard, AppFormInput, AppButton, AppCard },
  props: {
    token: String,
  },
  setup(props) {
    const { event } = useGtag();

    const formSent = ref(false);
    const loading = ref(false);

    const submitForm = async (e) => {
      try {
        loading.value = true;

        const body = new FormData(e.target);

        await axios.post(`contact/new_password/${props.token}`, body);

        event("password_changed", {
          event_category: "password_reset",
          event_label: "success",
        });

        formSent.value = true;
      } catch (error) {
        event("password_changed", {
          event_category: "password_reset",
          event_label: "error",
        });
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
