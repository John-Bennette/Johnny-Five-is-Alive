<template>
  <section class="hero">
    <div class="container mx-auto text-center py-20">
      <h1 class="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p class="text-lg mb-8">I'm a passionate developer creating amazing web experiences.</p>
      <a href="#projects" class="btn btn-primary">View My Projects</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
.hero {
  background: url('/path/to/your/background-image.jpg') no-repeat center center;
  background-size: cover;
  color: white;
}

.btn {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
}

.btn-primary {
  @apply hover:bg-blue-700;
}
</style>
