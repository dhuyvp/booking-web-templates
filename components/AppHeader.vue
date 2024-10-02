<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">My Nuxt App</h1>
      <nav class="navigation">
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/services">Services</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          <li><NuxtLink to="/domain/bvdkquocoai">BVDKQUOCOAI</NuxtLink></li>
          <li><NuxtLink to="/domain/ttytlanggiang">TTYTLANGGIANG</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header {
  background-color: #333;
  color: white;
  padding: 1rem 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo {
  font-size: 1.5rem;
}

.navigation ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.navigation a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.navigation a:hover {
  color: #ff6347; /* Màu khi hover */
}
</style>
