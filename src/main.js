// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import Blog from './components/Blog'
// import Users from './components/Users'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const userData = {
	template: `
	    <div class="user-data">
	      <h2><em>Get args from url params:</em> {{ $route.params.id }}</h2>
	      <router-view></router-view>
	    </div>`,
	// watch: {
	// 	'$route' (to, from) {
	// 		alert('Router Ready to Change Now!');
	// 	}
	// }
}

const userHome = { template: '<div>Home</div>'}
const userProfile = { template: '<div>Profile</div>'}
const userPosts = { template: '<div>Posts</div>'}

// router config
const router = new VueRouter({
	routes: [
        {path: "/", component: Home},
        {path: "/helloworld", component: HelloWorld},
        {path: "/user/:id", component: Blog,
         children: [
           {
           	 path: '', component: userHome
           },
           {
             path: 'profile',
             component: userProfile
           },
           {
           	 path: 'posts',
           	 component: userPosts
           }
        ]
     },
	],
	mode: "history"
})

// register gobal component
// Vue.component('users', Users)

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
