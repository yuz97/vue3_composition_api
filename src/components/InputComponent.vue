<template>
   <div class="container">ini adalah component user by {{ data }}</div>
</template>

<script>
import { ref } from "vue";
export default {
   async setup() {
      const data = ref("");

      const getData = () => {
         new Promise((resolve) => {
            return setTimeout(() => {
               resolve((data.value = "yusri"));
            }, 3000);
         });
      };
      console.log(data);
      await getData();

      return { data };
   },
};
</script>

<style></style>
