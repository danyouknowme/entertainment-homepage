<template>
	<div
		class="card-container flex-0 bg-white rounded-md relative"
		:class="[size === 'sm' ? 'w-60 h-36' : 'w-80 h-40']"
	>
		<img
			:src="'https://www.themoviedb.org/t/p/original' + movie.backdrop_path"
			alt="backdrop image"
			class="w-full h-full object-cover rounded-md"
		/>
		<div
			class="absolute top-2 right-3 w-6 h-6 bg-lightblack rounded-full flex items-center justify-center cursor-pointer"
		>
			<b-icon icon="bookmark" class="text-xs text-white"></b-icon>
		</div>
		<div
			class="text-white"
			:class="[size === 'sm' ? 'mt-2' : 'absolute bottom-3 left-4']"
		>
			<p
				class="font-light text-lightgrey"
				:class="[size === 'sm' ? 'text-xs' : 'text-sm']"
			>
				<span>{{ movie.release_date.split("-")[0] }}</span>
				<b-icon icon="dot" class="text-white" />
				<span>Movie</span>
				<b-icon icon="dot" class="text-white" />
				<span>{{ movie.adult ? "18+" : "PG" }}</span>
			</p>
			<p class="font-medium" :class="[size === 'sm' ? 'text-sm' : 'text-lg']">
				{{ movie.title }}
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Movie } from "../types/movie";

@Component
export default class Card extends Vue {
	@Prop({ default: "sm" }) readonly size!: string;
	@Prop() readonly movie!: Movie;
}
</script>

<style scoped lang="scss">
.card-container {
	font-family: "Rubik", sans-serif;
}
</style>
