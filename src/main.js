import Vue from "vue"
import App from "./App.vue"

// Font Awesome config
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
    el: "#app",
    render: h => h(App)
})