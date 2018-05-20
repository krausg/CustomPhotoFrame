var buttonGrid = Vue.component('buttonGrid', {
  template: ` <div>OMFG</div>
     `
});


Vue.component('grid', {
  template: `
    <div> 
      <div :style="styleObject">
        Hello <button @click="buttonPressed" > {{ currentDepth }}</button>
        <btnGrid :style="childObject" ></btnGrid>
      </div>
    </div>
  `,
  props: {
    depth: {
      default: 2,
      type: Number
    }
  },
  data() {
    return {
      styleObject: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red'
      },
      childObject:{
        backgroundColor: 'green'
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
    btnGrid : buttonGrid
  },
  created() {
    var Button = Vue.extend(buttonGrid)
    var ButtonInstance = new Button()
    ButtonInstance.$mount() // pass nothing
    console.log(this.btnGrid)
    // this.$refs.container.appendChild(btnGrid.$el)

    return;
  }

});




new Vue({
  el: "#app"
});  