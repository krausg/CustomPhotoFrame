export default {
	template: `
		<div class="div-split-container"> CONTAINER
    		<div :class="leftPaneClasses">
				<slot name="left-pane" />
       		</div>
    	   <div :class="rightPaneClasses" >
	   		   	<slot name="right-pane"  />
			</div>
		</div> 
  `,
	props: {
		vertical: {
			default: true,
			type: Boolean
		}
	},
	data() {
		return {
		}
	},
	methods: {
	},
	computed: {
		leftPaneClasses(){
			let classes =[];
			if(this.vertical){
				console.log(this.vertical);
				classes.push("div-split-left")	
			}
			return classes;
		},
		rightPaneClasses(){
			let classes =[];
			if(this.vertical){
				classes.push("div-split-right")
			}
			return classes;
		}
	},
	created() {
		return;
	}

};

