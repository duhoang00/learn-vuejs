<template>
  <div class="item">
    <slot name="name"></slot>
  </div>
</template>

<style scoped>
.item {
  margin: 1rem;
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.055);
  color: white;
}
.item:deep() input {
  border: none;
  background-color: rgba(255, 255, 255, 0.055);
  color: white;
}
</style>
