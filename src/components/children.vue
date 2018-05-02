<template>

    <div class="container">
      <span class="text" @click="back">Click Back</span>
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
}
.text{
  font-size: 30px;
  cursor: pointer;
}
</style>
