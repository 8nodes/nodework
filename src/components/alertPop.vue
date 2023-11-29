<template>
  <div class="custom-alert">
    <span class="close-button" @click="undoDelete">×</span>
    <p>Are you sure you wanna delete this?</p>
    <div class="button-container">
      <button @click="confirmDelete" class="confirm-button">OK</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    confirmDelete() {
      this.$emit('confirm-delete');
    },
    undoDelete() {
      this.$emit('undo-delete');
    },
  },
};
</script>

<style scoped>
.custom-alert {
  background-color: #3498db;
  color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 60%;
  transform: translate(-50%, -50%);
  text-align: center;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
}

.button-container {
  margin-top: 15px;
}

.confirm-button {
  background-color: #fff;
  color: #3498db;
  border: 1px solid #3498db;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.confirm-button:hover {
  background-color: #3498db;
  color: white;
}

/* Add smooth transition for the close button */
.close-button:hover {
  color: #ccc;
}
</style>
