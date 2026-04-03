<script setup lang="ts">
import Header from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";
import {ref} from "vue";

const theme = ref('light')

</script>

<template>
  <v-app :theme="theme">
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped></style>
