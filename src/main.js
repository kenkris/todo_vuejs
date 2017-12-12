// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

//  Import components
import TodoList from './components/TodoList'
import Test from './components/Test'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
	mode : 'history',
	base : __dirname,
	routes : [
		{ path : '/', component : TodoList },
		{ path : '/todolist', component : TodoList },
		{ path : '/about', component : Test }
	]
});

new Vue({
	router,
	template:`<div>
				<h1><router-link to="/">Logo</router-link></h1>
				<ul>
					<li><router-link to="/todolist">Todo</router-link></li>
					<li><router-link to="/about">About</router-link></li>
				</ul>
				<router-view></router-view>
			</div>`
}).$mount('#app');
