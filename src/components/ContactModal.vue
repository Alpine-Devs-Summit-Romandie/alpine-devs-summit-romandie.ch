<script setup lang="ts">
import { ref } from 'vue'
import useContactFormWeb3 from '@/composables/useContactFormWeb3.ts'

const props = defineProps<{locale: string}>()
const show = defineModel({
  type: Boolean,
  required: true,
})

const { loading, formFields, submitForm, formError } = useContactFormWeb3()

const isValid = ref(false)
const formSubmitted = ref(false)
const submit = async () => {
  formFields.value.lang = props.locale
  formSubmitted.value = await submitForm()
}
</script>

<template>
  <v-dialog v-model="show" max-width="600px">
    <v-card>
      <v-card-title class="text-h5 text-primary">
        {{ $t('contact.title') }}
      </v-card-title>
      <template v-if="formSubmitted === true">
        <v-card-text>
          <v-alert type="success">
            {{ $t('contact.success') }}
          </v-alert>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="show = false">
            {{ $t('common.close') }}
          </v-btn>
        </v-card-actions>
      </template>
      <template v-else>
        <v-card-text>
          <p>{{ $t('contact.intro') }}</p>
          <v-alert
            v-if="formError !== null"
            type="error"
          >
            <p>{{ $t('contact.error') }}</p>
            <p>{{ formError }}</p>
          </v-alert>
          <v-form v-model="isValid" @submit.prevent="submit">
            <v-text-field
              v-model="formFields.name"
              :label="$t('contact.name')"
              :placeholder="$t('contact.namePlaceholder')"
              required
              :rules="[(v: string) => !!v || $t('contact.nameRequired')]"
            />
            <v-text-field
              v-model="formFields.email"
              :label="$t('contact.email')"
              :placeholder="$t('contact.emailPlaceholder')"
              type="email"
              required
              :rules="[(v: string) => !!v || $t('contact.emailRequired'), (v: string) => /.+@.+\..+/.test(v) || $t('contact.emailValid')]"
            />
            <v-textarea
              v-model="formFields.message"
              :label="$t('contact.message')"
              :placeholder="$t('contact.messagePlaceholder')"
              required
              :rules="[(v: string) => !!v || $t('contact.messageRequired')]"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="show = false">
            {{ $t('common.cancel') }}
          </v-btn>
          <v-btn
            color="secondary"
            variant="elevated"
            @click="submit"
            :loading="loading"
            :disabled="!isValid"
          >
            {{ $t('contact.submit') }}
          </v-btn>
        </v-card-actions>
      </template>
    </v-card>
  </v-dialog>
</template>

<style scoped>
</style>
