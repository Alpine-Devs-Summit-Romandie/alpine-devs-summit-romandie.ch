<script setup lang="ts">
import {useI18n} from "vue-i18n";
import { ref } from "vue";
import i18n from "@/plugins/vue-i18n.ts";
import { type SupportedLanguages, switchLocale} from "@/locale/locale.ts";

const { locale } = useI18n()
const drawer = ref(false)

function switchLang() {
  i18n.global.locale = switchLocale(locale.value as SupportedLanguages)
}

function closeDrawer() {
  drawer.value = false
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
    <v-toolbar-title class="d-none d-sm-inline-flex">Alpine Devs Summit Romandie</v-toolbar-title>

    <!-- Navigation Links (Desktop) -->
    <div class="d-none d-sm-inline-flex ml-auto gap-2">
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
        to="/sondage"
      >
        {{ $t('header.topBar.survey') }}
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
        class="text-none"
        href="#newsletter"
      >
        {{$t('header.topBar.newsletterBtn') }}
      </v-btn>
      <v-btn
        variant="text"
        color="primary"
        class="text-none font-weight-semibold"
        @click="switchLang"
      >
        {{ locale === 'fr' ? 'EN' : 'FR' }}
      </v-btn>
    </div>

    <!-- Mobile Menu Button -->
    <v-spacer class="d-sm-none"></v-spacer>
    <v-app-bar-nav-icon
      class="d-sm-none"
      @click="drawer = !drawer"
      icon="mdi-menu"
    ></v-app-bar-nav-icon>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
  >
    <v-list>
      <v-list-item
        title="Home"
        to="/"
        @click="closeDrawer"
      >
        <template #prepend>
          <v-icon icon="mdi-home"></v-icon>
        </template>
      </v-list-item>
      <v-list-item
        :title="$t('header.topBar.survey')"
        to="/sondage"
        @click="closeDrawer"
      >
        <template #prepend>
          <v-icon icon="mdi-poll"></v-icon>
        </template>
      </v-list-item>
      <v-list-item
        :title="$t('header.topBar.mission')"
        to="/mission"
        @click="closeDrawer"
      >
        <template #prepend>
          <v-icon icon="mdi-target"></v-icon>
        </template>
      </v-list-item>
      <v-list-item
        :title="$t('header.topBar.newsletterBtn')"
        href="#newsletter"
        @click="closeDrawer"
      >
        <template #prepend>
          <v-icon icon="mdi-email"></v-icon>
        </template>
      </v-list-item>
      <v-divider class="my-2"></v-divider>
      <v-list-item
        :title="locale === 'fr' ? 'English' : 'Français'"
        @click="switchLang"
      >
        <template #prepend>
          <v-icon icon="mdi-translate"></v-icon>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
</style>
