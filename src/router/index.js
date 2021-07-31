import Vue from "vue";
import VueRouter from "vue-router";

import Store from "../components/Store";
import shoppingcart from "../components/shoppingcart";

Vue.use(VueRouter);
export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Store },
    { path: "/cart", component: shoppingcart },
    { path: "*", redirect: "/" },
  ],
});
