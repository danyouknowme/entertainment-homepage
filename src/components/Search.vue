<template>
  <div class="flex w-full items-center">
    <b-icon icon="search" class="text-white text-lg my-3 mr-4"></b-icon>
    <input
      type="text"
      placeholder="Search for movies or TV series"
      class="flex-1 outline-none border-none text-white bg-transparent"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Search extends Vue {}
</script>
  