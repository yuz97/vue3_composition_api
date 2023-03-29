import { createStore } from "vuex";

// cara 1
// export default createStore({
//    state: {
//       username: "",
//       credential: {},
//       totalLikes: 0,
//    },
//    getters: {
//       fakeTotalLikes(state) {
//          return state.totalLikes + 100;
//       },
//    },
//    mutations: {
//       increment(state) {
//          state.totalLikes++;
//       },
//       setUsername(state, value) {
//          state.username = value;
//       },
//       setCredential(state, payload) {
//          state.credential = payload;
//       },
//    },
//    actions: {
//       async getCredential({ commit }) {
//          const response = await fetch(`http://localhost:3000/buah`);
//          const data = await response.json();
//          commit("setCredential", data);
//       },
//    },
//    modules: {},
// });

// cara 2
import post from "./modules/post";
import user from "./modules/user";
export default createStore({
   modules: {
      post,
      user,
   },
});
