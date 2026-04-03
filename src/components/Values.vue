<script setup lang="ts">
const values = [
  {
    icon: 'mdi-share-variant',
    title: 'values.share.title',
    text: 'values.share.text',
  },
  {
    icon: 'mdi-earth',
    title: 'values.open.title',
    text: 'values.open.text',
  },
  {
    icon: 'mdi-account-group',
    title: 'values.federate.title',
    text: 'values.federate.text',
  },
]
</script>

<template>
  <section id="values">
    <v-container>
      <v-row>
        <v-col
          v-for="value in values"
          :key="value.title"
        >
          <v-card
            class="text-center elevation-0"
            style="min-height: 200px"
          >
            <v-card-item>
              <v-icon
                :icon="value.icon"
                size="32"
              />
            </v-card-item>
            <v-card-title>{{ $t(value.title) }}</v-card-title>
            <v-card-text>{{ $t(value.text) }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>

</style>
