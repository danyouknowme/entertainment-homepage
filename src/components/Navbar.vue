<template>
  <div
    class="
      bg-lightblue
      flex flex-col
      items-center
      justify-between
      p-4
      rounded-xl
    "
  >
    <div class="flex flex-col items-center">
      <b-icon
        icon="calendar-fill"
        class="text-red mb-4 text-2xl cursor-pointer"
      ></b-icon>
      <b-icon
        icon="grid-fill"
        class="text-lightbluefont my-3 cursor-pointer"
        :class="page === 'home' ? 'active' : ''"
        @click="redirectTo('home')"
      ></b-icon>
      <b-icon
        icon="film"
        class="text-lightbluefont my-3 cursor-pointer"
        :class="page === 'movie' ? 'active' : ''"
        @click="redirectTo('movie')"
      ></b-icon>
      <b-icon
        icon="tv"
        class="text-lightbluefont my-3 cursor-pointer"
        :class="page === 'watch' ? 'active' : ''"
        @click="redirectTo('watch')"
      ></b-icon>
      <b-icon
        icon="bookmark-fill"
        class="text-lightbluefont my-3 cursor-pointer"
        :class="page === 'bookmark' ? 'active' : ''"
        @click="redirectTo('bookmark')"
      ></b-icon>
    </div>
    <div class="w-8 h-8 border-2 border-white rounded-full">
      <img
        class="w-full h-full rounded-full object-contain"
        src="https://avatars.githubusercontent.com/u/78087668?s=400&u=ea83200b76f65c48c46c9a502a3d5a61c4458672&v=4"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component({})
export default class Navbar extends Vue {
  @Prop(String) page: string | undefined;

  redirectTo(redirectPage: string) {
    if (this.page === redirectPage) return;
    this.$router.push({
      path: `/${redirectPage}`,
    });
  }
}
</script>

<style>
.active {
  color: white !important;
}
</style>
