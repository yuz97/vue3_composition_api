<template>
   <p>
      {{ alert.name }}
   </p>
   <p>ini adalah {{ name }} dan warnanya adalah {{ color }}</p>
   <pre>nilai {{ count }}</pre>
   <button @click="countNum">hitung</button>
   {{ result }}
</template>

<script>
import { computed, reactive, toRefs, ref } from "vue";
export default {
   setup() {
      const alert = reactive({
         message: "halo ini halaman about",
         name: "my name is  yusri",
      });
      setTimeout(() => {
         alert.name = " my name is ridwan";
      }, 3000);

      const buah = reactive({
         name: "apel",
         color: "merah",
      });
      setTimeout(() => {
         buah.name = "jeruk";
         buah.color = "orange";
      }, 3000);

      const count = ref(0);
      const addNum = ref(6);

      const countNum = () => {
         count.value++;
      };

      const result = computed(() => count.value + addNum.value);
      const result2 = computed({
         get: () => count.value + addNum.value,
         set: (val) => (addNum.value = val),
      });

      return {
         alert,
         ...toRefs(buah),
         count,
         addNum,
         countNum,
         result,
         result2,
      };
   },
};
</script>

<style></style>
