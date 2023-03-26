<template>
   {{ message }}<br />
   {{ halo }}

   <br />
   ini adalah counter {{ counter }}
   <button @click="addCount">add</button>
   ini adalah buah {{ name }} dan warnanya {{ color }}
   <button v-on:click="changeButton">change</button>
</template>

<script>
import { ref, reactive, toRefs } from "vue";

export default {
   setup() {
      const message = "hello world";
      const counter = ref(0);
      const buah = reactive({
         name: "pisang",
         color: "kuning",
      });

      //ref harus menggunakan value
      const halo = ref("halo guys");
      setTimeout(() => {
         halo.value = "hei";
      }, 3000);

      //methods
      const addCount = function () {
         counter.value++;
      };

      const changeButton = () => {
         buah.name = "melon";
         buah.color = "hijau";
      };
      return {
         message,
         halo,
         counter,
         addCount,
         ...toRefs(buah),
         changeButton,
      };
   },
};
</script>

<style></style>
