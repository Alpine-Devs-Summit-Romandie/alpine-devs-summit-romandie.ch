<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import ParallaxCustom from "@/components/ParallaxCustom.vue";

const router = useRouter()
const { t } = useI18n()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <parallax-custom>
    <template #title>
      <h1 class="text-uppercase mt-0 mb-4 text-display-large font-weight-bold">
        {{ t('notFound.title') }}
      </h1>
    </template>
    <template #subtitle>
      <h3>{{ t('notFound.heading') }}</h3>
    </template>
    <template #cta>
      <h5>{{ t('notFound.description') }}</h5>
      <v-btn
        color="primary"
        size="large"
        @click="goHome"
      >
        {{ t('notFound.backHome') }}
      </v-btn>
    </template>
  </parallax-custom>
</template>

<style scoped>
</style>
