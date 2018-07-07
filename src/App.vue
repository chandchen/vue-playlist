<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Users from './components/Users'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  data(){
    return {
      // title: 'Hello world!'
      users: [
        {name: 'Chand', position: 'Developer', show: false},
        {name: 'Chand', position: 'Developer', show: false},
        {name: 'Chand', position: 'Developer', show: false},
        {name: 'Chand', position: 'Developer', show: false},
        {name: 'Chand', position: 'Developer', show: false},
        {name: 'Chand', position: 'Developer', show: false}
      ],
      title: "Pass a value here, (number/string/boolean)",
    }
  },
  methods: {
    updateTitle(title) {
      this.title = title
    }
  },
  components: {
    // HelloWorld,
    'users': Users,
    'app-header': Header,
    'app-footer': Footer,
  }
}
</script>

<style scoped>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
h1{
  color: purple;
}
</style>
