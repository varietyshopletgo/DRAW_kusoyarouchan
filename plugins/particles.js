import Vue from 'vue'
import Particles from "particles.vue";
Vue.use(Particles);

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})