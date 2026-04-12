<script setup lang="ts">
import ParallaxCustom from "@/components/ParallaxCustom.vue";
</script>

<template>
  <parallax-custom>
    <template #title>
      <h1 class="text-uppercase mt-0 mb-4 text-display-large font-weight-bold">
        {{ $t('welcome.hero.titlePart1') }}<br /> <span class="text-secondary">{{ $t('welcome.hero.titlePart2') }}</span>
      </h1>
    </template>
    <template #subtitle>
      <h3>{{ $t('welcome.hero.subtitle') }}</h3>
    </template>
    <template #cta>
      <h5>{{ $t('welcome.hero.survey') }}</h5>
      <v-btn
        color="secondary"
        variant="flat"
        class="text-none ml-2"
        :href="$t('common.surveyURL')"
        target="_blank"
      >
        {{ $t('welcome.hero.surveyBtn') }}
      </v-btn>
    </template>
  </parallax-custom>
</template>

<style scoped>
</style>
