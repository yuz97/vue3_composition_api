<template>
   <div class="container">
      halo
      <Suspense>
         <animal-component />
      </Suspense>
      <p>total likes :{{ likes }} by {{ username }}</p>
      <p>total fake likes :{{ fakeLikes }}</p>
      <p>{{ credential }}</p>
   </div>
</template>

<script>
import AnimalComponent from "@/components/AnimalComponent.vue";
import { useStore } from "vuex"; //hanya digunakan untuk composition api
import { ref, computed, onMounted } from "vue";
export default {
   components: { AnimalComponent },
   setup() {
      const store = useStore();
      const username = ref("");
      // const credential = ref({});

      const likes = computed(() => {
         return store.state.totalLikes;
      });

      const fakeLikes = computed(() => {
         return store.getters.fakeTotalLikes;
      });

      const credential = computed(() => {
         return store.state.credential;
      });

      onMounted(() => {
         username.value = store.state.username;
         // credential.value = store.state.credential;
      });

      return {
         likes,
         username,
         credential,
         fakeLikes,
      };
   },
};
</script>

<style></style>
