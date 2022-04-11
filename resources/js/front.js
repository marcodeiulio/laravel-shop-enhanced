require('./bootstrap');

window.Vue = require('vue');

import Products from "./components/Products.vue";

const root = new Vue({
	el: '#root',
	render: h => h(Products)
});