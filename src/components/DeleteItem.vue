<template>
  <div class="delete-item">
    <slot id="id"><font-awesome-icon :icon="['fas', 'trash-can']" /></slot>
  </div>
</template>

<style scoped>
.delete-item {
  margin: 1rem;
  padding: 0.5rem;
}
</style>
