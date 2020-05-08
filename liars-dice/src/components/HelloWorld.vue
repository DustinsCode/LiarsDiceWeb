<template>
  <div class="hello">
    <h1>Welcome to Liar's Dice</h1>
    <h3>Please sign in</h3>
    <div>
      <input type="email" v-model="email" placeholder="Email address" class="input" required>
      <input type="password" v-model="password" placeholder="Password" class="input" required>
    </div>
    <p>Need an account? <a href="/signup">Sign up now!</a></p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
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
