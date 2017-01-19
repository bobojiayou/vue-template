import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from 'store'
import components from './components/'
import 'bootstrap'
import './style/sass/index.scss'

Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase())
    Vue.component(`v${name}`, components[key])
})

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

new Vue({ store, router }).$mount('#edu')