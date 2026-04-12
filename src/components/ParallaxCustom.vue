<script setup lang="ts">

</script>

<template>
  <v-parallax src="https://images.unsplash.com/photo-1515268064940-5150b7c29f35?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
    <div class="d-flex flex-column fill-height justify-center align-center text-center text-white hero">
      <slot name="title" />
      <slot name="subtitle" />
      <slot name="cta" />
    </div>
  </v-parallax>

</template>

<style scoped>
.hero {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
