<template>
  <div id="home">
    <!-- <img src="./assets/logo.png"> -->
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <users v-bind:users="users"></users>
    <!-- <users v-bind:users="users"></users> -->
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Users from './Users'
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'home',
  data(){
    return {
      // title: 'Hello world!'
      users: [
        // {name: 'Chand', position: 'Developer', show: false},
        // {name: 'Chand', position: 'Developer', show: false},
        // {name: 'Chand', position: 'Developer', show: false},
        // {name: 'Chand', position: 'Developer', show: false},
        // {name: 'Chand', position: 'Developer', show: false},
        // {name: 'Chand', position: 'Developer', show: false}
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
  },
  created() {
    this.$http.get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        // console.log(data);
        this.users = data.body;
      })
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
