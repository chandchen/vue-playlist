<template>
  <header v-on:click="changeTitle">
    <h1>{{ title1 }}-{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      title1: 'Vue.js Demo'
    }
  },
  methods: {
    changeTitle: function() {
      // this.title = "changed here!"
      this.$emit("titleChanged", "children -> parents event")
    }
  },
  // Events & Lifecycle
  // beforeCreate: function() {
  //   alert('Step 1: Before component instance created run function here!')
  // },
  // created: function() {
  //   alert('Step 2: Instance created but do not render page!')
  // },
  // beforeMount: function() {
  //   alert('Step 3: Before component mount, page do not render, DOM render already!')
  // },
  // mounted: function() {
  //   alert('Step 4: After component mounted, page rendered!')
  // },
  // beforeUpdate: function() {
  //   alert('Step 5: Before component update, page do not render, DOM render already!')
  // },
  // updated: function() {
  //   alert('Step 6: After component updated, page rendered')
  // },
  // beforeDestory: function() {
  //   alert('Step 7: Before component destory')
  // },
  // destoryed: function() {
  //   alert('Step 8: After component destoryed')
  // },

}
</script>


<style scoped>
header{
  background: lightgreen;
  padding: 10px;
}
h1{
  color: #222;
  text-align: center;
}
</style>
