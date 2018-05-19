
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello',
    xsize: 12,
    ysize: 12,
    test: "<div>Hey</div>",
    testdata: [
      1, 2, 3, 4, 5
    ]
  },
  computed: {
    testdata2() {
      return this.testdata.filter(p => p % 2 ? true : false);
    }
  },
  methods: {
    test2() {
      return this.testdata.filter(p => p % 2 ? true : false);
    }
  }

});

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


// import Button from '../Button.vue'
// import Vue from 'vue'

// var instance = new Button()
// var ComponentClass = Vue.extend(Button)
// var instance = new ComponentClass()

// instance.$mount() // pass nothing
// this.$refs.container.appendChild(instance.$el)

// Vue.component('test', {
//   props: {
//     message: Text
//   },
//   render: function (createElement) {
//     return createElement("div",this.message);
//   }

// })