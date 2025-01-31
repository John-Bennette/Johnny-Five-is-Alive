<template>
  <div>
    <Header />
    <main>
      <h2>About Me</h2>
      <!-- Add your content here -->
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'About',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
