<template>
    <div class="view">
      <div class="todo" v-for="(todo, index) in todos" :key="index">
        <div class="title">
          <p>{{ todo.title }}</p>
          <i class="fas fa-trash-alt trash-icon" @click="deleteTodo(todo._id)"></i>
        </div>
        <div class="steps">
          <ul>
            <li v-for="(step, stepIndex) in todo.steps" :key="stepIndex">
              <input
                type="checkbox"
                v-model="step.checked"
                @change="handleCheckboxChange(step._id)"
              />
              {{ step.description }}
              {{ step.completed }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import '@fortawesome/fontawesome-free/css/all.css';
  import axios from 'axios';
  
  export default {
    name: 'itemView',
    props: {
      todos: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {};
    },
    methods: {
      deleteTodo(id) {
        axios
          .delete(`http://localhost:3001/todo/${id}`)
          .then(() => {
            console.log('Todo deleted');
            this.$emit('reloadlist');
          })
          .catch((error) => {
            console.log(error);
          });
      },
      handleCheckboxChange(stepId) {
        const step = this.todos
          .flatMap((todo) => todo.steps)
          .find((step) => step._id === stepId);
          axios.patch(`http://localhost:3001/todo/${stepId}`,{
            completed: true,
          })
          .then(()=>{
            this.$emit('reloadlist');
            console.log('patch is a success');

          })
  
        console.log('Checkbox value for step with id', stepId, ':', step.checked);
      },
    },
  };
  </script>
  
  
  
  <style>
  .todo {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  .title {
    width: 95%;
    padding: 15px;
    background: grey;
    color: whitesmoke;
    border-radius: 10px;
    margin-top: 10px;
  }
  
  .trash-icon {
    position: absolute;
    top: 23%;
    right: 5%;
    cursor: pointer;
    font-size: 25px;
    color: red; /* Customize the color as needed */
  }
  ul{
    list-style: none;
    padding: 5px;
  }
  li{
    padding: 4px;
  }
  </style>
  