import divSplit from './div-split.js';

export default {
	/*	template: `<div>
		<div v-for="(child, index) in $children">
			<component :is="child" :key="child.name"></component>
		</div>
		<button @click="test()">okay</button>
		</div>
	  `,*/
	data() {
		return {
			content: ["hello", "gustav", "gooorso", "sonstiges"],
			cont: this.$children
		};
	},
	render(ce) {
		var hello = [];
		for (var element of this.content) {
			hello.push(ce("div", element))
		}
		for (var element of this.cont) {
			hello.push(ce(element))
		}
		hello.push(ce("button", { on: { click: this.test } }, "check"))
		return ce("div", hello)
	},
	props: {

	},
	methods: {
		test() {
			const divSplitCTOR = Vue.extend(divSplit)
			const componentInstance = new divSplitCTOR({
				props: { vertical: true },
				slot: {
					default: {
						render(h) {
							return h("div", "omg");
						}
					}
				}
			})
			this.cont.push(divSplitCTOR);
			//this.content.push("121")
			console.log(this.$children)
		}
	},
	computed: {

	},
	components: {
		'divSplit': divSplit
	},
	children: {

	},
	created() {


		//this.$mount('#elementidhere')

		return;
	},
	mounted() {

		return;
	}

};

