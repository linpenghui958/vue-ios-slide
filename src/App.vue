<template>
  <div id="app" :clas="transitionClass">
    <transition :name="transitionClass">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapState   } from 'vuex'
import store from './store'
export default {
  name: 'App',
  computed: {
    transitionClass () {
      if (!this.direction) return ''
      return 'slide-' + (this.direction === 'forward' ? 'in' : 'out')
    },
    getDirection() {
      return store.state.direction
    },
    ...mapState({
      direction: state => state.direction
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

/* // ORIGIN: set slide transition effect time */
.slide-in-enter-active, .slide-in-leave-active {
  transition: all 0.3s;
}

/* // ORIGIN: add slide transition effect */
.slide-in-enter,
.slide-in-leave-to
{
  transform: translate3d(100%, 0, 0);
}

.slide-out-enter-active, .slide-out-leave-active {
  transition: all 0.3s;
}

/* // ORIGIN: add slide transition effect */
.slide-out-enter,
.slide-out-leave-to
{
  transform: translate3d(-100%, 0, 0);
}

</style>
