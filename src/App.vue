<template>
  <div class="form">
    <addItem @reloadlist="reloadList" />
    <ItemView :todos="todos" @reloadlist="reloadList" />
  </div>
</template>

<script>
import axios from 'axios';
import addItem from './components/addItem.vue';
import ItemView from './components/itemView.vue';

export default {
  name: 'App',
  components: {
    addItem,
    ItemView,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    getTodos() {
      axios.get('http://localhost:3001/todo')
        .then(response => {
          this.todos = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    reloadList() {
      this.getTodos();
    },

  },

  created() {
    this.getTodos();
  },
};
</script>
