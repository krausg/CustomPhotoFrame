export default {
  template: `
		<div> {{messageIntern}} </div>
  `,
  props: {
    message: {
      default: null,
    },
    timeout: {
      default: 3,
    },
  },
  data() {
    return {
      timer: null,
      timerLength: this.timeout,
      messageIntern: this.message,
    };
  },
  methods: {
    timerSetup() {
      this.timer = window.setInterval(this.timerTick, 500);
    },
    timerStop() {
      window.clearInterval(this.timer);
      this.timer = null;
      this.$emit("finishedDisplay", this);
    },
    timerTick() {
      console.log(this.timerLength);
      if (this.timerLength > 0) {
        this.timerLength -= 1;
      } else {
        this.timerStop();
      }
    },
  },
  computed: {
    msg: {
      get() {
        return this.messageIntern;
      },
      set(newValue) {
        this.messageIntern = newValue;
      },
    },
  },
  created() {
    return;
  },
  mounted() {
    this.timerSetup();
  },
};
