<template>

    <div class="container">
      <span class="text" @click="back">Click Back</span>

      <router-link to="/child2">Go to Child</router-link>
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
  background-color: bisque;
}
.text{
  font-size: 30px;
  cursor: pointer;
}
</style>
