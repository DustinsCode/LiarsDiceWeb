<template>
  <div class="hello">
    <img id="logo" alt="Liar's Dice Logo" src="../assets/LiarsDiceTitle.png" />
    <h1>Welcome to Liar's Dice</h1>
    <h3>Please sign in</h3>
    <div>
      <input
        type="email"
        v-model="email"
        placeholder="Email address"
        class="input"
        required
      />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        class="input"
        required
      />
    </div>
    <p>Need an account? <router-link to="/signup">Sign up now!</router-link></p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
