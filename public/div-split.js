export default {
  template: `
		<div class="div-split-container">
    		<div :class="leftPaneClasses">
				<slot name="leftPane" />
				<div ref="leftPane" />
       		</div>
    	   <div :class="rightPaneClasses" >
					  <slot name="rightPane"  />
					  <div ref="rightPane" />
			</div>
			<slot></slot>
		</div> 
  `,
  props: {
    vertical: {
      default: true,
      type: Boolean,
    },
    leftSlot: {
      default: {},
    },
    rightSlot: {
      default: {},
    },
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    leftPaneClasses() {
      let classes = [];
      if (this.vertical) {
        classes.push("div-split-left");
      }
      return classes;
    },
    rightPaneClasses() {
      let classes = [];
      if (this.vertical) {
        classes.push("div-split-right");
      }
      return classes;
    },
  },
  mounted() {
    this.leftSlot.$mount();
    this.rightSlot.$mount();

    this.$refs["rightPane"].appendChild(this.rightSlot.$el);
    this.$refs["leftPane"].appendChild(this.leftSlot.$el);
  },
  created() {
    return;
  },
};
