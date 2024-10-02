<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ currentYear }} My Nuxt App. All rights reserved.</p>
      <div class="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(), // Lấy năm hiện tại
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 1rem 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.social-links {
  margin-top: 0.5rem;
}

.social-links a {
  color: white;
  text-decoration: none;
  margin: 0 0.5rem;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #ff6347; /* Màu khi hover */
}
</style>
