<template>
  <div class="home">
    <img id="logo" alt="Liar's Dice Logo" src="../assets/LiarsDiceTitle.png" />
    <SignUp/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignUp from "@/components/SignUp.vue";

export default {
  name: "Home",
  components: {
    SignUp
  }
};
</script>

<style>

.logo {
  height: 3em;
  width: 5em;
}

</style>