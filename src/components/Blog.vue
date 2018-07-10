<template>
  <div id="blog">
    <h2>Vue.js Router</h2>
    <ul>
      <li><router-link to="/user/foo">/user/foo</router-link></li>
      <!-- <router-link to="/user/bar">/user/bar</router-link> -->
      <li><router-link to="/user/foo/profile">/user/foo/profile</router-link></li>
      <li><router-link to="/user/foo/posts">/user/foo/posts</router-link></li>

      <li><router-link :to="{ name: 'named-router', params: { userId: 123 }}">Named router</router-link></li>
    </ul>
    <router-view class="view-one"></router-view>
    <router-view class="view-two" name="apple"></router-view>
    <router-view class="view-three" name="banana"></router-view>
  </div>
</template>

<script>


export default {
  name: 'Blog',
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
    // goBack() {
    //   window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    // },
    // goForward() {
    //   window.history.length > 1 ? this.$router.go(1) : this.$router.push('/')
    // }
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
