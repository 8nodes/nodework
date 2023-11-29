<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="input-field" id="title" v-model="project.title" required>
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="input-field" id="description" v-model="project.description" required></textarea>
      </div>

      <div class="form-group">
        <label for="steps">Steps</label>
        <div v-for="(step, index) in project.steps" :key="index" class="input-group">
          <input type="text" class="input-field" v-model="step.description" required>
          <button type="button" class="btn-remove" @click="removeStep(index)">Remove</button>
        </div>
        <button type="button" class="btn-add" @click="addStep">Add Step</button>
      </div>

      <button type="submit" @click="emitReload" class="submit-btn">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      project: {
        title: '',
        description: '',
        steps: [],
      },
    };
  },
  methods: {
    addStep() {
      this.project.steps.push({ description: '' });
    },
    removeStep(index) {
      this.project.steps.splice(index, 1);
    },
    submitForm() {
      axios.post('http://localhost:3001/todo', this.project)
        .then(response => {
          console.log('Todo saved successfully', response.data);
          this.$emit('reloadlist');
        })
        .catch(error => {
          console.log(error);
        });
      this.$emit('submit', this.project);
      this.project = { title: '', description: '', steps: [] };
    },
  },
};
</script>

  
  <style scoped>
  
  .form-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #333;
  }
  
  .input-field {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .input-group {
    display: flex;
    margin-bottom: 10px;
  }
  
  .btn-remove {
    padding: 8px;
    margin-left: 8px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-add {
    padding: 8px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .checkbox-field {
    margin-top: 4px;
  }
  
  .submit-btn {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  </style>
  