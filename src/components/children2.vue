<template>
  <transition name="slide">
    <!-- <div class="container">
      <span class="text" @click="back">Click Back(child 2)</span>
      
    </div> -->
    <div>1231</div>
  </transition>
</template>

<script>
export default {
  created () {
    console.log('child2')
  },
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
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: darkgray;
}
.text{
  font-size: 30px;
  cursor: pointer;
}

.slide-enter-active, .slide-leave-active{
  transition: all 3s ease
}

.slide-enter, .slide-leave-to{
  transform: translate3d(-100%, 0, 0)
}
</style>
