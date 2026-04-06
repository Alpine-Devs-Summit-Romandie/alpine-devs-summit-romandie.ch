<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <v-container class="pa-8">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card flat class="pa-6">
          <v-card-title class="text-primary font-weight-bold text-center mb-6">
            {{ t('mission.title') }}
          </v-card-title>
          <v-card-text class="text-accent text-body-1 text-justify" style="line-height: 1.8;">
            <p>
              {{ t('mission.paragraph1') }}
            </p>
            <p>
              {{ t('mission.paragraph2') }}
            </p>
            <p>
              {{ t('mission.paragraph3') }}
            </p>
            <p>
              {{ t('mission.paragraph4') }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
</style>
