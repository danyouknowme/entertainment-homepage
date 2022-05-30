<template>
	<div class="card-container flex-0 w-80 h-40 bg-white rounded-md relative">
		<img
			:src="'https://www.themoviedb.org/t/p/original' + movie.backdrop_path"
			alt="backdrop image"
			class="w-full h-full object-cover rounded-md"
		/>
		<div class="absolute bottom-3 left-4 text-white">
			<p class="text-sm font-light text-lightgrey">
				<span>{{ movie.release_date.split("-")[0] }}</span>
				<b-icon icon="dot" class="text-white" />
				<span>Movie</span>
				<b-icon icon="dot" class="text-white" />
				<span>{{ movie.adult ? "18+" : "PG" }}</span>
			</p>
			<p class="font-medium text-lg">{{ movie.title }}</p>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Movie } from "../types/movie";

@Component
export default class Card extends Vue {
	@Prop() readonly movie!: Movie;
}
</script>

<style scoped lang="scss">
.card-container {
	font-family: "Rubik", sans-serif;
}
</style>
