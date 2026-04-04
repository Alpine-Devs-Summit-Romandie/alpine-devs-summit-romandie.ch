<script setup lang="ts">
import Header from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";
import CookieConsentBanner from "@/components/CookieConsentBanner.vue";
import {ref} from "vue";

const theme = ref('light')

</script>

<template>
  <v-app :theme="theme">
    <Header />
    <v-main>
      <router-view />
      <CookieConsentBanner />
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped></style>
