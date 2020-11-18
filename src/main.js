/***
 * Adrian Verdugo ( アドリアン　)
 * @github adrian273
 * @since 11/1/2020
 * 
 */

import Vue from 'vue'
import App from './App.vue'
//socket io
import * as io from "socket.io-client";
import VueSocketIOExt from "vue-socket.io-extended";

const socket = io('http://localhost:4000')
Vue.use(VueSocketIOExt, socket);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  sockets: {
    connect() {
      console.log('socket connected')
    },
    customEmit(val) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
}).$mount('#app')
