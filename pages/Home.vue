<template>
  <div>
    <NavBar />
    <Header />
    <Hero />
    <main>
      <FeaturedProjects />
      <h2>Welcome to My Portfolio</h2>
      <FeaturedAIProjects />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import FeaturedProjects from '../components/FeaturedProjects.vue'
import Footer from '../components/Footer.vue'
import FeaturedAIProjects from '../components/FeaturedAIProjects.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Header,
    Hero,
    FeaturedProjects,
    Footer,
    FeaturedAIProjects
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
