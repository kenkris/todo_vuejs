<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Test />
    <TodoList />

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
import Test from './components/Test'
import TodoList from './components/TodoList'


export default {
  name: 'app',
  components: {
    Test, TodoList
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
  margin-top: 60px;
}
</style>
