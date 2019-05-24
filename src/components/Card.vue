<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.card {
  // width: 96%;
  // min-height: 86%;
  height: 86%;
  background: #ffff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 0;
  box-shadow: 2px 0 5px #ccc;
}
</style>
