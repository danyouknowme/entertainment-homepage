<template>
  <div class="home p-6 min-h-screen flex">
    <Navbar :page="'home'" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue"; // @ is an alias to /src

@Component({
  components: {
    Navbar,
  },
})
export default class HomeView extends Vue {}
</script>
