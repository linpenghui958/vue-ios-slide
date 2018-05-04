<template>
  <!-- <transition name="slide-out" mode="out-in"> -->
    <div class="hello">
      <h1>{{ msg }} {{direction}}</h1>
      <h2>Essential Links</h2>
      <router-link to="/child">Go to Child</router-link>
    </div>
  <!-- </transition> -->
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState([
      'direction'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin-top: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  width: 100%;
  height: 100%;
  background-color: aqua;
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
