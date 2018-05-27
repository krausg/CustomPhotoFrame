export default {
	template: `
		<div> {{message}} </div>
  `,
	props: {
        message: {
            default: ""
        }
	},
	data() {
		return {
		}
	},
	methods: {
        timer(){
            this.$emit("finishedDisplay");
        }
	},
	computed: {
		
	},
	created() {
		return;
	}

};

