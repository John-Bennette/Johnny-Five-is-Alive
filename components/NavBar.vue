<template>
  <nav :class="{ 'bg-gray-900 text-white': isDarkMode, 'bg-white text-black': !isDarkMode }" class="flex justify-between items-center p-4 border-b border-gray-300">
    <ul class="flex gap-4">
      <li><a href="#home" class="hover:underline">Home</a></li>
      <li><a href="#about" class="hover:underline">About</a></li>
      <li><a href="#projects" class="hover:underline">Projects</a></li>
      <li><a href="#resume" class="hover:underline">Resume</a></li>
      <li><a href="#contact" class="hover:underline">Contact</a></li>
    </ul>
    <button @click="toggleDarkMode" class="bg-transparent border-none cursor-pointer text-lg">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isDarkMode: false
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark-mode', this.isDarkMode);
    }
  }
}
</script>

<style scoped>
/* Scoped styles if needed */
</style>
