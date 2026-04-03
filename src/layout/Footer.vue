<script setup lang="ts">

import NewsletterIk from "@/components/NewsletterIk.vue";
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
    <p>&copy; {{ $t('footer.copyright') }}</p>
  </v-footer>
</template>

<style scoped>

</style>
