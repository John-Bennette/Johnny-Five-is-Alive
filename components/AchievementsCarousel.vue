<template>
  <div class="carousel">
    <div class="carousel-item" v-for="(achievement, index) in achievements" :key="index" :class="{ active: index === currentIndex }">
      <h3>{{ achievement.title }}</h3>
      <p>{{ achievement.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AchievementsCarousel',
  data() {
    return {
      achievements: [
        { title: 'Achievement 1', description: 'Description for achievement 1' },
        { title: 'Achievement 2', description: 'Description for achievement 2' },
        { title: 'Achievement 3', description: 'Description for achievement 3' }
      ],
      currentIndex: 0
    }
  },
  mounted() {
    this.startAutoplay();
  },
  methods: {
    startAutoplay() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.achievements.length;
      }, 3000);
    }
  }
}
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-item {
  position: absolute;
  width: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.carousel-item.active {
  opacity: 1;
}
</style>
