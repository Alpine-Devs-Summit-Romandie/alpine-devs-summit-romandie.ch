<script setup lang="ts">
import {computed, onMounted} from "vue";
import useNewsletterIK, {
  type InfomaniakIntegrationFormConfig
} from "@/composables/useNewsletterIK.ts";

const { loadExternalScripts } = useNewsletterIK();
const props = defineProps<{
  locale: string,
  ikFormConfig: InfomaniakIntegrationFormConfig
}>()

const formActionUrl = computed(() => `https://newsletter.infomaniak.com/v3/api/1/newsletters/webforms/${props.ikFormConfig.formId}/submit`)

onMounted(() => {
  loadExternalScripts();
});
</script>

<template>
  <a id="newsletter"></a>
  <v-row justify="center">
    <v-col>
      <form method="post"
        :action="formActionUrl"
        class="inf-form">
        <input type="email" name="email" style="display:none"/>
        <input
          type="hidden"
          name="key"
          :value="ikFormConfig.formKey"
        />
        <input
          type="hidden"
          name="webform_id"
          :value="ikFormConfig.formId"
        />
        <input
          type="hidden"
          name="inf[83774]"
          data-inf-meta="83774"
          data-inf-error=""
          :value="props.locale"
        />

        <div :class="'inf-main_' + props.ikFormConfig.formCssClassId">
          <div class="inf-success" style="display:none">
            <v-alert
              type="success"
              :title="$t('newsletter.alert.title')"
            >
              {{$t('newsletter.alert.text') }}
            </v-alert>
          </div>

          <div class="inf-input inf-input-text mb-4">
            <p>{{ $t('newsletter.callToAction.text') }}</p>
            <v-row class="inf-content">
              <v-col>
                <v-text-field
                  variant="outlined"
                  :label="$t('newsletter.form.emailLabel')"
                  type="email"
                  name="inf[1]"
                  data-inf-meta="1"
                  data-inf-error=""
                  required
                  :placeholder="$t('newsletter.form.emailPlaceholder')"
                  class="w-100 pa-3"
                />
              </v-col>
              <v-col>
                <v-btn
                  type="submit"
                  color="secondary"
                  size="large"
                  class="mt-6"
                >
                  {{ $t('newsletter.callToAction.button') }}
                </v-btn>
              </v-col>
            </v-row>
          </div>
          <altcha-widget
            hidelogo
            hidefooter
            floating
            challengeurl="https://newsletter.infomaniak.com/v3/altcha-challenge"
          ></altcha-widget>
          <div class="inf-submit">
          </div>
        </div>
      </form>
    </v-col>
  </v-row>
</template>

<style scoped>
.inf-form {
  width: 100%;
}

.inf-input-text input {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  font-size: 1rem;
}

.inf-input-text input:focus {
  outline: none;
  border-color: rgb(var(--v-theme-primary));
  box-shadow: 0 0 0 2px rgba(var(--v-theme-primary), 0.1);
}

</style>
