<template>
  <div class="featured-ai-projects">
    <div class="project-card" v-for="project in projects" :key="project.id">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <a :href="project.githubLink" target="_blank">View on GitHub</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturedAIProjects',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'AI Project 1',
          description: 'Description for AI Project 1',
          githubLink: 'https://github.com/user/ai-project-1'
        },
        {
          id: 2,
          title: 'AI Project 2',
          description: 'Description for AI Project 2',
          githubLink: 'https://github.com/user/ai-project-2'
        },
        {
          id: 3,
          title: 'AI Project 3',
          description: 'Description for AI Project 3',
          githubLink: 'https://github.com/user/ai-project-3'
        }
      ]
    }
  }
}
</script>

<style scoped>
.featured-ai-projects {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.project-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 30%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.project-card h3 {
  margin-top: 0;
}

.project-card a {
  color: #007bff;
  text-decoration: none;
}

.project-card a:hover {
  text-decoration: underline;
}
</style>
