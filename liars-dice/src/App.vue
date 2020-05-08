<template>
  <v-app>

    <v-content>
      <Login />
    </v-content>

    <v-footer :padless="absolute"> 
      <v-col class="text-center" cols="12">
        Made with ❤️ in The Great Lakes State
      </v-col>
    </v-footer>

  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Login from "./components/Login.vue";

export default Vue.extend({
  name: "App",

  components: {
    Login
  },

  data: () => ({
    //
  })
});
</script>
