<script setup lang="ts">

import NewsletterIk from "@/components/NewsletterIk.vue";
import ContactModal from "@/components/ContactModal.vue";
import { ref } from 'vue';

const showContact = ref(false);
</script>

<template>
  <v-footer color="accent" class="d-flex flex-column ga-2 py-4">
    <NewsletterIk
      :locale="$i18n.locale"
      :ik-form-config="{
        formId: $t('newsletter.form.configInfomaniak.formId'),
        formKey: $t('newsletter.form.configInfomaniak.formKey'),
        formCssClassId: $t('newsletter.form.configInfomaniak.formCssClassId')
      }"
    />
    <div class="d-flex align-center w-100">
      <v-btn icon="mdi-email" @click="showContact = true" color="primary" variant="text" />
      <p class="text-center w-100">&copy; {{ $t('footer.copyright') }}</p>
    </div>
  </v-footer>
  <ContactModal
    v-model="showContact"
    :locale="$i18n.locale"
  />
</template>

<style scoped>

</style>
