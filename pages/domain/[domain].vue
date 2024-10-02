<script setup lang="ts">
  const route = useRoute()
  const domain = route.params.domain;

  console.log('domain: ', domain);

  const { data } = await useFetch(`/api/companyInformation?domain=${domain}`)
</script>

<template>
  <div>
    <img 
      v-if="data.LogoUrl" 
      :src="data.LogoUrl" 
      alt="Logo" 
      style="width: 100px; height: auto;"
    />
    <h1>{{ data?.Name }}</h1>
    <pre>{{ data }}</pre>
  </div>
</template>