<template>

    <div class="container">
      <span class="text" @click="back">Click Back(child 2)</span>
    </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style>
.container{
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: darkgray;
}
.text{
  font-size: 30px;
  cursor: pointer;
}
</style>
