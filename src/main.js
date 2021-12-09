import { createApp } from 'vue'
import App from './App.vue'
import vueLogIt from "vue-logit"


const app = createApp(App)


app.use(vueLogIt, {
    language: 'cn'
})


app.mount('#app')
