import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Vuelidate from 'vuelidate'

Vue.use(Buefy)
Vue.use(Vuelidate)

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyB550-B_xXgTxHuLWyFTL5b-qwPi65BQoQ",
  authDomain: "habit-tracker-a04de.firebaseapp.com",
  projectId: "habit-tracker-a04de",
  storageBucket: "habit-tracker-a04de.appspot.com",
  messagingSenderId: "412212852956",
  appId: "1:412212852956:web:852efb1dd0f83251291c19",
  measurementId: "G-5REF863135"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
