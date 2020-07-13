import divSplit from "./div-split.js";
import imag from "./image.js";
import test from "./test.js";

export default {
  template: `
		<div>
			<button @click="createDiv()">div</button>
			<button @click="createImag()">txt</button>
			<div ref="container"/>	
		</div>
	  `,
  data() {
    return {
      vertical: this.vertical,
    };
  },
  computed: {},
  props: {
    oki: {
      default: [],
    },
    vertical: {
      default: true,
    },
  },
  methods: {
    test(cInst) {
      this.$refs["container"].removeChild(cInst.$el);
      //this.vertical = !this.vertical;
      this.createDiv();
    },
    createInstance(component, props) {
      var ComponentClass = Vue.extend(component);
      var instance = new ComponentClass({
        propsData: props,
      });
      return instance;
    },
    createDiv() {
      var imagInstEins = this.createInstance(test, {
        vertical: !this.vertical,
        oki: this.oki,
      });
      var imagInstZwei = this.createInstance(test, {
        vertical: !this.vertical,
        oki: this.oki,
      });
      var instance = this.createInstance(divSplit, {
        vertical: this.vertical,
        leftSlot: imagInstEins,
        rightSlot: imagInstZwei,
      });
      instance.$mount();

      if (this.$refs["container"] != null) {
        this.$refs["container"].appendChild(instance.$el);
      }
    },
    createImag() {
      var instance = this.createInstance(imag, { message: this.oki[0] });
      instance.$on("finishedDisplay", this.test);
      instance.$mount();

      if (this.$refs["container"] != null) {
        this.$refs["container"].appendChild(instance.$el);
      }
    },
  },
  mounted() {
    this.createImag();
    return;
  },
  components: {
    divSplit: divSplit,
    imag: imag,
  },
};
