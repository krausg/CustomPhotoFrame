
// var vm = new Vue({
//   el: '#example',
//   data: {
//     message: 'Hello',
//     xsize: 12,
//     ysize: 12
//   },
//   // computed: {
//   // a computed getter
//   // render: function (createElement) {
//   // `this` points to the vm instance
//   // return createElement("div",this.message)
//   // }
//   // },
//   render: {
//     gustav: function (createElement) {
//       // `this` points to the vm instance
//       return createElement("div", this.message)
//     }
//   }

// })

// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     message: 'You loaded this page on ' + new Date().toLocaleString()
//   }
// })

// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen: false
//   }
// })

// var app4 = new Vue({
//   el: '#app-4',
//   data: {
//     todos: [
//       { text: 'Learn JavaScript' },
//       { text: 'Learn Vue' },
//       { text: 'Build something awesome' }
//     ]
//   }
// })
import Button from '../Button.vue'
import Vue from 'vue'

var instance = new Button()
var ComponentClass = Vue.extend(Button)
var instance = new ComponentClass()

instance.$mount() // pass nothing
this.$refs.container.appendChild(instance.$el)

Vue.component('test', {
  props: {
    message: Text
  },
  render: function (createElement) {
    return createElement("div",this.message);
  }

})