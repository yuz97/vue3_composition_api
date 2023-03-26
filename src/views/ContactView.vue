<template>
   <div class="contact">
      <user-component :hewan="binatang" />
      <button @click="changeName">Ganti nama</button>
   </div>
</template>

<script>
import { reactive } from "vue";
import UserComponent from "@/components/UserComponent.vue";
export default {
   components: { UserComponent },

   setup() {
      const binatang = reactive({
         nama: "kucing",
         jenis: "anggora",
      });

      //methods
      const changeName = () => {
         binatang.nama == "kucing"
            ? ((binatang.nama = "kelinci"), (binatang.jenis = "imut"))
            : ((binatang.nama = "kucing"), (binatang.jenis = "anggora"));
      };

      return { binatang, changeName };
   },
};
</script>

<style></style>
