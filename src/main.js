import Vue from 'vue'
import App from './App.vue'
import store from "./store"
import router from "./routes/index"
import firebase from 'firebase'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBHommFjXRf-iCZx0oG0ayWEXfqs-0ko-U",
  authDomain: "bitmex-abuse.firebaseapp.com",
  projectId: "bitmex-abuse",
  storageBucket: "bitmex-abuse.appspot.com",
  messagingSenderId: "510154972634",
  appId: "1:510154972634:web:a1f174f1df50382750b4e3"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
