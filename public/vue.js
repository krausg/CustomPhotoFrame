var buttonGrid = Vue.component('buttonGrid', {
  template: ` <div>OMFG</div>
     `
});

var divSplit = Vue.component('div-split', {
  template: `
    <div> 
        <slot name="left-pane" :class="{isVertical: vertical, left}" />
        <slot name="right-pane" :class="{isVertical: vertical, right}" />
    </div>
  `,
  props: {
    isVertical: {
      default: true
    }
  },
  data() {
    return {
      vertical: {
        height: "100%",
        width: "50%",
        position: "fixed",
        zIndex: "1",
        top: "0",
        overflowX: "hidden",
        paddingTop: "20px"
      },
      left: {
        left: "0",
        backgroundColor: "#111"
      },
      right: {
        right: "0",
        backgroundColor: "red"
      }
    }
  },
  methods: {
  },
  components: {
    divSplit: divSplit,
    right: divSplit
  },
  created() {
    return;
  }

});

new Vue({
  el: "#app",
  components: {
    divSplit: divSplit
  }
});  