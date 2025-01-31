<template>
  <form @submit.prevent="handleSubmit" class="contact-form">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
    </div>
    <div>
      <label for="message">Message:</label>
      <textarea id="message" v-model="message" required></textarea>
    </div>
    <button type="submit">Submit</button>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      successMessage: '',
      errorMessage: ''
    }
  },
  methods: {
    handleSubmit() {
      if (this.name && this.email && this.message) {
        // Simulate form submission
        this.successMessage = 'Your message has been sent successfully!';
        this.errorMessage = '';
        this.resetForm();
      } else {
        this.errorMessage = 'Please fill in all fields.';
        this.successMessage = '';
      }
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
}
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}

.contact-form div {
  margin-bottom: 10px;
}

.contact-form label {
  display: block;
  margin-bottom: 5px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.contact-form button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.contact-form button:hover {
  background-color: #0056b3;
}

.success {
  color: green;
}

.error {
  color: red;
}
</style>
