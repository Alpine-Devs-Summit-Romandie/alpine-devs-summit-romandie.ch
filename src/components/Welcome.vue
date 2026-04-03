<script setup lang="ts">

</script>

<template>
  <v-parallax src="https://images.unsplash.com/photo-1515268064940-5150b7c29f35?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
    <div class="d-flex flex-column fill-height justify-center align-center text-center text-white hero">
      <h1 class="text-uppercase mt-0 mb-4">
        {{ $t('welcome.hero.titlePart1') }}<br /> <span class="text-secondary">{{ $t('welcome.hero.titlePart2') }}</span>
      </h1>
      <h3>{{ $t('welcome.hero.subtitle') }}</h3>
      <h5>{{ $t('welcome.hero.survey') }}</h5>
      <v-btn
        color="secondary"
        variant="flat"
        class="text-none ml-2"
        :href="$t('welcome.hero.surveyLink')"
        target="_blank"
      >
        {{ $t('welcome.hero.surveyBtn') }}
      </v-btn>
    </div>
  </v-parallax>
</template>

<style scoped>
.hero {
  background-color: rgba(0, 0, 0, 0.2);
}
.hero h1 {
  font-size: 3.5rem
}
</style>
