
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/main.css'
import './assets/index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

const MenuToggle = document.querySelector('.menu-toggle input');

const nav = document.querySelector('nav ul');

MenuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});