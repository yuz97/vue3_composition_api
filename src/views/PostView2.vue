<template>
   <h2>Post Page</h2>
   <p>selamat datang {{ username }}</p>
   <button
      @click="increment"
      class="ml-3 px-4 py-1 bg-slate-500 text-white focus:ring focus:ring-slate-400 focus:outline-none">
      add like
   </button>
   <button
      @click="setUsername('yuz ganteng')"
      class="ml-3 px-4 py-1 bg-slate-500 text-white focus:ring focus:ring-slate-400 focus:outline-none">
      change username
   </button>
   <button
      @click="getCredential"
      class="ml-3 px-4 py-1 bg-slate-500 text-white focus:ring focus:ring-slate-400 focus:outline-none">
      change profile
   </button>
   <pre>{{ credential }}</pre>
   <p>total like : {{ totalLikes }}</p>
   <p>total fakelike : {{ fakeTotalLikes }}</p>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
   computed: {
      // ...mapState(["username", "credential", "totalLikes"]),
      ...mapState({
         username: (state) => state.user.username,
         credential: (state) => state.user.credential,
         totalLikes: (state) => state.post.totalLikes,
      }),
      // ...mapGetters(["fakeTotalLikes"]),
      ...mapGetters({ fakeTotalLikes: "post/fakeTotalLikes" }),
   },
   methods: {
      // ...mapMutations(["increment", "setUsername", "setCredential"]),
      ...mapMutations({
         increment: "post/increment",
         setUsername: "user/setUsername",
         setCredential: "user/setCredential",
      }),
      // ...mapActions(["getCredential"]),
      ...mapActions({ getCredential: "user/getCredential" }),
   },
};
</script>

<style></style>
