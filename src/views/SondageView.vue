<template>
  <!-- HERO -->
  <parallax-custom>
    <template #title>
      <h1 class="text-h3 font-weight-bold mb-4">
        {{ $t('survey.hero.title') }}
      </h1>
    </template>
    <template #subtitle>
      <p class="text-h6 mb-6">
        {{ $t('survey.hero.subtitle') }}
      </p>
    </template>
    <template #cta>
      <v-btn
        color="primary"
        size="large"
        class="mb-4"
        :href="$t('common.surveyURL')"
        target="_blank"
      >
        {{ $t('survey.hero.textCTA') }}
      </v-btn>

      <div class="text-caption text-medium-emphasis text-white">
        {{ $t('survey.hero.emphaseCTA') }}
      </div>
    </template>
  </parallax-custom>

  <!-- POURQUOI -->
  <v-container class="py-12">
    <h2 class="text-h4 text-center mb-10">
      {{ $t('survey.why.title') }}
    </h2>

    <v-row>
      <v-col cols="12" md="4" class="text-center">
        <v-icon size="40">mdi-brain</v-icon>
        <h3 class="text-h6 mt-3">
          {{ $t('survey.why.col1.heading') }}
        </h3>
        <p>
          {{ $t('survey.why.col1.text') }}
        </p>
      </v-col>

      <v-col cols="12" md="4" class="text-center">
        <v-icon size="40">mdi-tools</v-icon>
        <h3 class="text-h6 mt-3">
          {{ $t('survey.why.col2.heading') }}
        </h3>
        <p>
          {{ $t('survey.why.col2.text') }}
        </p>
      </v-col>

      <v-col cols="12" md="4" class="text-center">
        <v-icon size="40">mdi-account-group</v-icon>
        <h3 class="text-h6 mt-3">
          {{ $t('survey.why.col3.heading') }}
        </h3>
        <p>
          {{ $t('survey.why.col3.text') }}
        </p>
      </v-col>
    </v-row>
  </v-container>

  <!-- BENEFICES -->
  <v-card color="secondary">
    <v-container class="py-12 grey-lighten-4">
      <h2 class="text-h4 text-center mb-10">
        {{ $t('survey.benefits.heading') }}
      </h2>

      <v-row justify="center">
        <v-col cols="12" lg="4" md="6">
          <v-list bg-color="transparent" density="comfortable">
            <v-list-item>✔ {{ $t('survey.benefits.item1') }}</v-list-item>
            <v-list-item>✔ {{ $t('survey.benefits.item2') }}</v-list-item>
            <v-list-item>✔ {{ $t('survey.benefits.item3') }}</v-list-item>
            <v-list-item>✔ {{ $t('survey.benefits.item4') }}</v-list-item>
            <v-list-item>✔ {{ $t('survey.benefits.item5') }}</v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

  <!-- PROJET -->
  <v-container class="py-12">
    <h2 class="text-h4 text-center mb-6">
      {{ $t('survey.about.heading') }}
    </h2>

    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">
        <p>
          {{ $t('survey.about.paragraph1') }}
        </p>
        <p>
          {{ $t('survey.about.paragraph2') }}
        </p>
        <p>
          {{ $t('survey.about.paragraph3') }}
        </p>
      </v-col>
    </v-row>
  </v-container>

  <!-- ECOLES -->
  <v-container class="py-8">
    <v-alert type="info" variant="tonal" border="start">
      <strong>{{ $t('survey.schoolInfo.heading') }}</strong><br/>
      {{ $t('survey.schoolInfo.text') }}
    </v-alert>
  </v-container>

  <!-- CTA FINAL -->
  <v-container class="py-16 text-center">
    <h2 class="text-h5 mb-4">
      {{ $t('survey.finalCTA.heading') }}
    </h2>

    <v-btn
      color="primary"
      size="large"
      :href="$t('common.surveyURL')"
      target="_blank"
    >
      {{ $t('survey.finalCTA.goSurvey') }}
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
import ParallaxCustom from "@/components/ParallaxCustom.vue";
</script>

<style scoped>
</style>
