<template>
   <Suspense>
      <template #default>
         <input-component />
      </template>
      <template #callback> Loading .. </template>
   </Suspense>
</template>

<script>
import InputComponent from "@/components/InputComponent.vue";
export default {
   components: { InputComponent },
   setup() {
      return {};
   },
};
</script>

<style></style>
