<template>
  <div id="app" :clas="transitionClass">
    <!-- <transition :name="transitionClass"> -->
      <router-view/>
    <!-- </transition> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "./store";
export default {
  name: "App",
  data() {
    return {
      timerL: null,
      timerR: null,
      screen: { x: -1, y: -1 },
      touch: { x: -1, y: -1 },
      options: {
        EDGE_WIDTH: 48,
        EDGE_DURATION: 500
      },
      vm: {
        isLeft: false,
        isRight: false
      }
    };
  },
  created () {
    window.document.addEventListener('touchstart', this.touchstart, false)
    window.document.addEventListener('touchend', this.touchend, false)
  },
  methods: {
    touchstart (e) {
      if (e.touches.length != 1) return;
      
      const EDGE_WIDTH = this.options.EDGE_WIDTH;
      const EDGE_DURATION = this.options.EDGE_DURATION;

      this.screen.x = window.screen.width;
      this.screen.y = window.screen.height;
      this.touch.x = e.touches[0].clientX;
      this.touch.y = e.touches[0].clientY;

      if (this.touch.x >= 0 && this.touch.x < EDGE_WIDTH) {
        this.vm.isLeft = true
      } else {
        this.vm.isLeft = false
      }

      if (this.screen.x - this.touch.x < EDGE_WIDTH) {
        this.vm.isRight = true

        if (this.timerR) clearTimeout(this.timerR)
        this.timerR = setTimeout(() => {
          this.vm.isRight = false
        }, 800 + EDGE_DURATION)
      } else {
        this.vm.isRight = false
      }
    },
    touchend (e) {
      if (!this.vm.isLeft) return

      if (this.timerL) clearTimeout(this.timerL)
      this.timerL = setTimeout(() => {
        this.vm.isLeft = false
      }, this.options.EDGE_DURATION)

      console.log(`left-${this.vm.isLeft}  right-${this.vm.isRight}`)
    }
  },
  computed: {
    // transitionClass() {
    //   if (!this.direction) return "";
    //   return "slide-" + (this.direction === "forward" ? "in" : "out");
    // }
    transitionClass() {
      if (this.vm.isLeft || this.vm.isRight) return "";
      // return "slide-" + (this.direction === "forward" ? "in" : "out");
      return "slide-out"
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

/* // ORIGIN: set slide transition effect time */
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all ease 0.4s;
}

/* // ORIGIN: add slide transition effect */
.slide-in-enter,
.slide-in-leave-to {
  transform: translate3d(100%, 0, 0);
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


.slide-enter-active, .slide-leave-active{
transition: all 0.3s}
.slide-enter, .slide-leave-to{
transform: translate3d(100%, 0, 0)}
</style>
