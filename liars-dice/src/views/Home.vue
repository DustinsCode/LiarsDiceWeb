<template>
  <div class="home">
    <img id="logo" alt="Liar's Dice Logo" src="../assets/LiarsDiceTitle.png" />
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Login
  }
};
</script>

<style>
.logo {
  height: 3em;
  width: 5em;
}
</style>
