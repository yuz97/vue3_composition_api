<template>
   <div class="container">
      <Suspense>
         <animal-detail />
      </Suspense>
   </div>
</template>

<script>
import AnimalDetail from "@/components/AnimalDetail.vue";
export default {
   components: { AnimalDetail },
};
</script>

<style></style>
