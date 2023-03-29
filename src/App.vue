<template>
   <div class="main">
      <router-link to="/" exact>Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/post">Post </router-link> |
      <router-link to="/post2">Post-2 </router-link>
   </div>
   <br />
   <router-view></router-view>
</template>

<script>
export default {};
</script>

<style>
.main {
   margin: auto 0;
   text-align: center;
}
</style>
