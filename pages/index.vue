<script setup lang="ts">
const { data } = await useFetch('/api/companyInformation')
</script>

<template>
  <div>
    <NuxtLayout name="custom">
      <template #header> Some header template content. </template>

      The rest of the page
    </NuxtLayout>
  </div>
  
  <h1>{{data.Name}}</h1>
  <pre>{{ data }}</pre>
</template>
