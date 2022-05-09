<template>
  <div class="item">
    <slot name="name"></slot>
  </div>
</template>

<style scoped>
.item {
  margin-bottom: 1rem;
  padding: 0.5rem;
  box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px,
    rgb(15 15 15 / 10%) 0px 2px 4px;
  border-radius: 3px;
}
.item:deep() input {
  border: none;
  border-radius: 3px;
  width: 100%;
  border: none;
}
</style>
