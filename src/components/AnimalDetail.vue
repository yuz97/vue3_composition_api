<template>
   <div class="container">
      nama hewan : {{ name }} <br />warna : {{ color }}

      <button
         @click="addLike"
         class="px-4 py-1 bg-green-400 text-white focus:ring focus:ring-green-300 focus:outline-none">
         add like
      </button>
   </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
// import axios from "axios";
export default {
   name: "AnimalDetail",
   async setup() {
      const hewan = reactive({
         name: "",
         color: "",
      });

      const store = useStore();

      const route = useRoute();
      const id = route.params.id;

      //menggunakan fetch
      const getDetail = await fetch(`http://localhost:3000/hewan/${id}`);
      const { name, color } = await getDetail.json();
      hewan.name = name;
      hewan.color = color;

      //menggunakan axios
      // const getDetail = () => {
      //    axios.get(`http://localhost:3000/hewan/${id}`).then((res) => {
      //       hewan.name = res.data.name;
      //       hewan.color = res.data.color;
      //    });
      // };
      // await getDetail();

      //vuex
      const addLike = () => {
         store.commit("increment");
      };
      return {
         ...toRefs(hewan),
         addLike,
      };
   },
};
</script>

<style></style>
