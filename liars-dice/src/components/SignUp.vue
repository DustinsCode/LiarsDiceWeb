<template>
<v-container>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card-text>
        <v-container>
          <form>
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                name = "email"
                label="Mail"
                id="email"
                v-model="email"
                type="email"
                required></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                name = "password"
                label="Password"
                id="password"
                v-model="password"
                type="password"
                required></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                name = "confirmPassword"
                label="Confirm Password"
                id="confirmPassword"
                v-model="confirmPassword"
                type="password"
                :rules="[comparePasswords]"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-btn type="submit">Sign up</v-btn>
              </v-flex>
            </v-layout>
          </form>
        </v-container>
      </v-card-text>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SignUp extends Vue {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  };
  computed= {
    comparePasswords () {
      return this.password !== this.confirmPassword ? 'Passwords do not match' : true
    }
  };
  methods= {
    onSignup () {
      console.log({email: this.email, password: this.password, confirmPassword: this.confirmPassword})
    }
  }
}
</script>

<style></style>
