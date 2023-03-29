<template>
   <div class="container">
      <div class="mb-3">
         <label for="username" class="mr-4">username</label>
         <input
            type="text"
            id="username"
            v-model="username"
            name="username"
            class="px-3 py-2" />
      </div>
      <div class="mb-3">
         <label for="password" class="mr-4">password</label>
         <input
            type="password"
            id="password"
            name="password"
            class="px-3 py-2" />
      </div>
      <button
         @click="login"
         type="button"
         class="px-4 py-1 border border-slate-300">
         login
      </button>
   </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref } from "vue";
export default {
   setup() {
      const router = useRouter();
      const store = useStore();

      const username = ref("");

      const login = () => {
         localStorage.setItem("authenticated", true);
         // store.commit("setUsername", username.value);
         // store.dispatch("getCredential");
         store.commit("user/setUsername", username.value);
         store.dispatch("user/getCredential");
         router.push({ name: "post2" });
      };

      return {
         login,
         username,
      };
   },
};
</script>

<style></style>
