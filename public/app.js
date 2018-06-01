import divSplit from './div-split.js';
import test from './test.js';
import remoteImg from './image.js';

window.vm = new Vue({
  el: "#app",
  data() {
    return {
      okay: [ "hello again","oka2y" ]
    }
  },
  created() {

  },
  components: {
    divSplit, test, remoteImg
  }
}); 