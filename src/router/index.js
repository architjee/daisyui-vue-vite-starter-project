import App from '../App.vue'
import Login from '../Login.vue';
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    { path: '/', component: App },
    { path: '/login', component: Login },
  ]
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })
  export default router