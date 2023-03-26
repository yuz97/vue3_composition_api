import { createStore } from "vuex";

export default createStore({
   state: {
      totalLikes: 0,
      username: "",
   },
   getters: {},
   mutations: {
      increment(state) {
         state.totalLikes++;
      },
      setUsername(state, value) {
         state.username = value;
      },
   },
   actions: {},
   modules: {},
});
