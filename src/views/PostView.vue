<template>
   <div class="container">
      halo
      <Suspense>
         <animal-component />
      </Suspense>
      <p>total likes :{{ likes }} by {{ username }}</p>
   </div>
</template>

<script>
import AnimalComponent from "@/components/AnimalComponent.vue";
import { useStore } from "vuex";
import { ref, computed, onMounted } from "vue";
export default {
   components: { AnimalComponent },
   setup() {
      const store = useStore();
      const username = ref("");

      const likes = computed(() => {
         return store.state.totalLikes;
      });

      onMounted(() => {
         username.value = store.state.username;
      });

      return {
         likes,
         username,
      };
   },
};
</script>

<style></style>
