import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase'
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'

Vue.use(Router)  

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    }
]
});

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !await firebase.getCurrentUser()){
      next('login');
    }else{
      next();
    }
});

export default router