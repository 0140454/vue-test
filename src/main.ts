import VueCompositionAPI, { h } from "@vue/composition-api";
import Vue from "vue";
import "normalize.css";
import Demo from "@/pages/Demo.vue";

Vue.use(VueCompositionAPI);

new Vue({
  el: "#app",
  name: "App",
  render: (h) => h(Demo),
});
