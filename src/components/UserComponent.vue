<template>
   user component

   <pre>{{ message }}</pre>
   {{ hewan }} {{ hewan.nama }}
</template>

<script>
import { ref } from "vue";

export default {
   name: "UserComponent",
   props: {
      hewan: {
         type: Object,
         default: () => {},
      },
   },
   setup() {
      const message = ref("ini adalah component user");

      return { message };
   },
};
</script>

<style></style>
