<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <app-header></app-header>
    <users></users>
    <app-footer></app-footer>
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
      title: 'Hello world!'
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
