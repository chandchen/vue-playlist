<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
<!--     <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer> -->
    <ul>
<!--       <li><a href="/">Home</a></li>
      <li><a href="/helloworld">Hello World</a></li> -->
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/helloworld">Hello World</router-link></li>
      <li><router-link to="/user/foo">Blog</router-link></li>
    </ul>
    <button v-on:click="goBack">Previous</button>
    <button v-on:click="goForward">Next</button>
    <router-view></router-view>
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
      // users: [
      //   {name: 'Chand', position: 'Developer', show: false},
      //   {name: 'Chand', position: 'Developer', show: false},
      //   {name: 'Chand', position: 'Developer', show: false},
      //   {name: 'Chand', position: 'Developer', show: false},
      //   {name: 'Chand', position: 'Developer', show: false},
      //   {name: 'Chand', position: 'Developer', show: false}
      // ],
      // title: "Pass a value here, (number/string/boolean)",
    }
  },
  methods: {
    // updateTitle(title) {
    //   this.title = title
    // }
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    goForward() {
      window.history.length > 1 ? this.$router.go(1) : this.$router.push('/')
    }
  },
  components: {
    // HelloWorld,
    // 'users': Users,
    // 'app-header': Header,
    // 'app-footer': Footer,
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
