<template>
   <div class="container">
      <ul>
         <li v-for="(animal, i) in animals" :key="animal">
            {{ i + 1 }}. {{ animal.name }} - {{ animal.color }}
            <router-link
               :to="`/post/${animal.id}`"
               class="px-3 py-1 focus:ring focus:outline-none bg-yellow-200 text-white rounded-md text-sm">
               detail
            </router-link>
         </li>
      </ul>
   </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
   async setup() {
      const animals = ref([]);
      const getAnimals = () => {
         try {
            axios
               .get(`http://localhost:3000/hewan`)
               .then((res) => (animals.value = res.data));
         } catch (error) {
            console.log(error.message);
         }
      };
      await getAnimals();
      return {
         animals,
      };
   },
};
</script>

<style></style>
