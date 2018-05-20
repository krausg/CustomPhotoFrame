var buttonGrid = Vue.component('buttonGrid', {
  template: ` <div>OMFG</div>
     `
});


var grid = Vue.component('grid', {
  template: `
    <div> 
      <div :style="styleObject">
        Hello <button @click="buttonPressed" > {{ currentDepth }}</button>
        <grid v-if="currentDepth>0" :depth="currentDepth" color="blue"/>
        <grid v-if="currentDepth>0" :depth="currentDepth" color="green"/>
      </div>
    </div>
  `,
  props: {
    depth: {
      default: 2,
      type: Number
    },
    color: {
      type: String,
      default: "crimson"
    }
  },
  data() {
    return {
      styleObject: {
        width: '500px',
        height: '500px',
        backgroundColor: this.color
      }
      , currentDepth: this.depth
    }
  },
  methods: {
    buttonPressed() {
      this.styleObject.backgroundColor = "blue";
    }
  },
  components: {
    grid: grid
  },
  created() {
    this.currentDepth--;
    // var Button = Vue.extend(buttonGrid)
    // var ButtonInstance = new Button()
    // ButtonInstance.$mount() // pass nothing
    // console.log(this.btnGrid)
    // this.$refs.container.appendChild(btnGrid.$el)

    return;
  }

});




new Vue({
  el: "#app"
});  