<template>
  <transition name="slide">
    <div class="container">
      <span class="text" @click="back">Click Back</span>
      
      <span class="text" @click="open">openChild2</span>
      <router-view/>
      <!-- <router-link to="/child2">Go to Child</router-link> -->
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.back();
    },
    open() {
      this.$router.push({
        path: '/child/child2'
      })
    }
  }
};
</script>

<style>
.container {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: bisque !important;
}
.text {
  font-size: 30px;
  cursor: pointer;
  width: 100%;
  margin-top: 50px;
  display: block;
  width: 100%;
}

.slide-enter-active, .slide-leave-active{
  transition: all 3s ease
}

.slide-enter, .slide-leave-to{
  transform: translate3d(100%, 0, 0)
}


.slide-out-enter-active,
.slide-out-leave-active {
  transition: all ease 0.3s;
}

/* // ORIGIN: add slide transition effect */
.slide-out-enter{
  transform: translate3d(100%, 0, 0);
}
.slide-out-enter-to{
  transform: translate3d(0, 0, 0);
}

.slide-out-leave{
  transform: translate3d(0,0,0)
}
.slide-out-leave-to {
  transform: translate3d(-100%, 0, 0);
}
</style>
