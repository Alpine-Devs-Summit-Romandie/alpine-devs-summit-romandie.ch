<script setup lang="ts">
import {useI18n} from "vue-i18n";
import i18n from "@/plugins/vue-i18n.ts";
import { type SupportedLanguages, switchLocale} from "@/locale/locale.ts";

const { locale } = useI18n()

function switchLang() {
  i18n.global.locale = switchLocale(locale.value as SupportedLanguages)
}
</script>

<template>
  <v-app-bar class="px-3">
    <v-app-bar-nav-icon
      class="text-primary text-headline-small font-weight-bold"
      to="/"
    >
      &lt;A/&gt;
    </v-app-bar-nav-icon>
    <v-toolbar-title>Alpine Devs Summit Romandie</v-toolbar-title>
    <v-btn
      variant="plain"
      color="primary"
      to="/"
    >
      {{ $t('header.topBar.home') }}
    </v-btn>
    <v-btn
      variant="plain"
      color="primary"
      to="/mission"
    >
      {{ $t('header.topBar.mission') }}
    </v-btn>
    <v-btn
      color="primary"
      variant="flat"
      class="text-none ml-2"
      href="#newsletter"
    >
      {{$t('header.topBar.newsletterBtn') }}
    </v-btn>
    <v-btn
      variant="text"
      color="primary"
      class="d-none d-sm-inline-flex text-none font-weight-semibold ml-2"
      @click="switchLang"
    >
      {{ locale === 'fr' ? 'EN' : 'FR' }}
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
</style>
