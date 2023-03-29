export default {
   namespaced: true,
   state: {
      username: " ",
      credential: {},
   },
   mutations: {
      setUsername(state, value) {
         state.username = value;
      },
      setCredential(state, payload) {
         state.credential = payload;
      },
   },
   actions: {
      async getCredential({ commit }) {
         const response = await fetch(`http://localhost:3000/buah`);
         const data = await response.json();
         commit("setCredential", data);
      },
   },
};
