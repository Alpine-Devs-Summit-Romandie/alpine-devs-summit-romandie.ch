<template>
    <v-fab
      class="me-4"
      color="secondary"
      location="bottom right"
      app
      icon
      @click="openSettings"
    >
      <v-icon>mdi-cookie-settings</v-icon>
      <v-tooltip
        activator="parent"
        location="top"
        :text="$t('cookie.manageTooltip')"
      />
    </v-fab>
    <!-- Modal des paramètres détaillés -->
    <v-dialog
      v-model="showSettings"
      max-width="600"
      persistent
      scrollable
    >
      <v-card class="cookie-settings-modal">
        <v-card-title class="text-h6 font-weight-bold pa-6 pb-4">
          <v-icon color="primary" class="mr-3">mdi-cookie-settings</v-icon>
          {{ $t('cookie.settings.title') }}
        </v-card-title>

        <v-divider />

        <v-card-text class="pa-6">
          <v-alert
            type="info"
            variant="tonal"
            class="mb-6"
            prepend-icon="mdi-information"
          >
            {{ $t('cookie.settings.description') }}
          </v-alert>

          <div class="space-y-6">
            <!-- Cookies essentiels -->
            <v-card
              variant="outlined"
              class="cookie-category"
              rounded="lg"
            >
              <v-card-text class="pa-4">
                <div class="d-flex align-center justify-space-between">
                  <div class="flex-grow-1">
                    <div class="d-flex align-center mb-2">
                      <v-icon color="success" class="mr-2">mdi-shield-check</v-icon>
                      <h4 class="text-h6 font-weight-medium">
                        {{ $t('cookie.settings.essential.title') }}
                      </h4>
                    </div>
                    <p class="text-body-2 text-medium-emphasis mb-0">
                      {{ $t('cookie.settings.essential.description') }}
                    </p>
                    <v-chip
                      size="small"
                      color="success"
                      variant="flat"
                      class="mt-2"
                    >
                      {{ $t('cookie.settings.alwaysActive') }}
                    </v-chip>
                  </div>
                  <v-switch
                    v-model="tempSettings.essential"
                    disabled
                    color="success"
                    class="ml-4"
                    inset
                  />
                </div>
              </v-card-text>
            </v-card>

            <!-- Cookies analytiques -->
            <v-card
              variant="outlined"
              class="cookie-category"
              rounded="lg"
            >
              <v-card-text class="pa-4">
                <div class="d-flex align-center justify-space-between">
                  <div class="flex-grow-1">
                    <div class="d-flex align-center mb-2">
                      <v-icon color="primary" class="mr-2">mdi-chart-line</v-icon>
                      <h4 class="text-h6 font-weight-medium">
                        {{ $t('cookie.settings.analytics.title') }}
                      </h4>
                    </div>
                    <p class="text-body-2 text-medium-emphasis mb-2">
                      {{ $t('cookie.settings.analytics.description') }}
                    </p>
                    <v-chip
                      size="small"
                      color="primary"
                      variant="outlined"
                      class="mb-0"
                    >
                      Google Analytics
                    </v-chip>
                  </div>
                  <v-switch
                    v-model="tempSettings.analytics"
                    color="primary"
                    class="ml-4"
                    inset
                  />
                </div>
              </v-card-text>
            </v-card>

            <!-- Cookies marketing -->
            <v-card
              variant="outlined"
              class="cookie-category"
              rounded="lg"
            >
              <v-card-text class="pa-4">
                <div class="d-flex align-center justify-space-between">
                  <div class="flex-grow-1">
                    <div class="d-flex align-center mb-2">
                      <v-icon color="secondary" class="mr-2">mdi-bullhorn</v-icon>
                      <h4 class="text-h6 font-weight-medium">
                        {{ $t('cookie.settings.marketing.title') }}
                      </h4>
                    </div>
                    <p class="text-body-2 text-medium-emphasis mb-2">
                      {{ $t('cookie.settings.marketing.description') }}
                    </p>
                    <v-chip
                      size="small"
                      color="secondary"
                      variant="outlined"
                      class="mb-0"
                    >
                      {{ $t('cookie.settings.marketing.services') }}
                    </v-chip>
                  </div>
                  <v-switch
                    v-model="tempSettings.marketing"
                    color="secondary"
                    class="ml-4"
                    inset
                  />
                </div>
              </v-card-text>
            </v-card>

            <!-- Cookies fonctionnels -->
            <v-card
              variant="outlined"
              class="cookie-category"
              rounded="lg"
            >
              <v-card-text class="pa-4">
                <div class="d-flex align-center justify-space-between">
                  <div class="flex-grow-1">
                    <div class="d-flex align-center mb-2">
                      <v-icon color="tertiary" class="mr-2">mdi-palette</v-icon>
                      <h4 class="text-h6 font-weight-medium">
                        {{ $t('cookie.settings.functional.title') }}
                      </h4>
                    </div>
                    <p class="text-body-2 text-medium-emphasis mb-2">
                      {{ $t('cookie.settings.functional.description') }}
                    </p>
                    <v-chip
                      size="small"
                      color="tertiary"
                      variant="outlined"
                      class="mb-0"
                    >
                      {{ $t('cookie.settings.functional.services') }}
                    </v-chip>
                    <p>{{ $t('cookie.settings.disabled') }}</p>
                  </div>
                  <v-switch
                    v-model="tempSettings.functional"
                    value="false"
                    disabled
                    color="tertiary"
                    class="ml-4"
                    inset
                  />
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-card-text>

        <v-divider />

        <v-card-actions class="pa-6 pt-4">
          <v-spacer />
          <v-btn
            variant="outlined"
            @click="cancelSettings"
            class="mr-3"
            prepend-icon="mdi-close"
          >
            {{ $t('common.cancel') }}
          </v-btn>
          <v-btn
            color="primary"
            @click="saveSettings"
            prepend-icon="mdi-content-save"
          >
            {{ $t('cookie.settings.save') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import { reactive, watch, onMounted} from 'vue'
import { useCookieConsent } from '@/composables/useCookieConsent'

const { showSettings, consentSettings, saveCustomSettings, openSettings, initializeConsent } = useCookieConsent()

// État temporaire pour les paramètres personnalisés
const tempSettings = reactive({
  analytics: consentSettings.value.analytics,
  marketing: consentSettings.value.marketing,
  functional: consentSettings.value.functional,
  essential: true
})

onMounted(() => {
  // Initialiser le consentement des cookies après le montage
  initializeConsent()
})

// Synchroniser les paramètres temporaires avec les paramètres actuels
watch(consentSettings, (newSettings) => {
  tempSettings.analytics = newSettings.analytics
  tempSettings.marketing = newSettings.marketing
  tempSettings.functional = newSettings.functional
}, { immediate: true })

const saveSettings = () => {
  saveCustomSettings(tempSettings)
}

const cancelSettings = () => {
  // Restaurer les valeurs actuelles
  tempSettings.analytics = consentSettings.value.analytics
  tempSettings.marketing = consentSettings.value.marketing
  tempSettings.functional = consentSettings.value.functional
  showSettings.value = false
}
</script>

<style scoped>
.cookie-settings-modal {
  border-radius: 12px;
}

.cookie-category {
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #f9fafb;
}

.cookie-category:hover {
  background-color: #f3f4f6;
}

</style>
