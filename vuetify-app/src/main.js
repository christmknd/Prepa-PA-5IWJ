import Vue  from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// eslint-disable-next-line no-undef
new Vue({
    // eslint-disable-next-line no-undef
    vuetify,
    render: h => h(App)
}).$mount('#app');
