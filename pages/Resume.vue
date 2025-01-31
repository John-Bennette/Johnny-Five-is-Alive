<template>
  <div class="resume">
    <h1>Resume</h1>
    <button @click="downloadPDF">Download PDF</button>
    <section>
      <h2>Education</h2>
      <ul>
        <li v-for="education in educationHistory" :key="education.id">
          <h3>{{ education.degree }}</h3>
          <p>{{ education.institution }} - {{ education.year }}</p>
        </li>
      </ul>
    </section>
    <section>
      <h2>Certifications</h2>
      <ul>
        <li v-for="certification in certifications" :key="certification.id">
          <h3>{{ certification.name }}</h3>
          <p>{{ certification.issuer }} - {{ certification.year }}</p>
        </li>
      </ul>
    </section>
    <section>
      <h2>Work Experience</h2>
      <ul>
        <li v-for="experience in workExperience" :key="experience.id">
          <h3>{{ experience.position }}</h3>
          <p>{{ experience.company }} - {{ experience.years }}</p>
          <p>{{ experience.description }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data() {
    return {
      educationHistory: [
        { id: 1, degree: 'B.Sc. in Computer Science', institution: 'University A', year: '2015-2019' },
        { id: 2, degree: 'M.Sc. in Artificial Intelligence', institution: 'University B', year: '2019-2021' }
      ],
      certifications: [
        { id: 1, name: 'Certified AI Practitioner', issuer: 'AI Institute', year: '2021' },
        { id: 2, name: 'Certified Data Scientist', issuer: 'Data Science Academy', year: '2020' }
      ],
      workExperience: [
        { id: 1, position: 'Software Engineer', company: 'Tech Company', years: '2019-2021', description: 'Worked on various software development projects.' },
        { id: 2, position: 'AI Specialist', company: 'AI Solutions', years: '2021-Present', description: 'Developing AI models and solutions for clients.' }
      ]
    }
  },
  methods: {
    downloadPDF() {
      // Logic to download the resume as a PDF
      alert('Download PDF functionality to be implemented');
    }
  }
}
</script>

<style scoped>
.resume {
  padding: 20px;
}

button {
  margin-bottom: 20px;
}

section {
  margin-bottom: 20px;
}

h2 {
  border-bottom: 2px solid #ddd;
  padding-bottom: 5px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>
