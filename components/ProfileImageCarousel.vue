<template>
  <div class="carousel">
    <div class="carousel-item" v-for="(image, index) in images" :key="index" :class="{ active: index === currentIndex }">
      <img :src="image" alt="Profile Image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileImageCarousel',
  data() {
    return {
      images: [
        'path/to/image1.jpg',
        'path/to/image2.jpg',
        'path/to/image3.jpg'
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
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
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
