<template>
	<div class="home p-6 min-h-screen flex">
		<Navbar :page="'home'" />
		<div class="w-full flex flex-col flex-1 ml-8 overflow-hidden">
			<Search @value-change="onChangeSearchValue" />
			<!-- Trending -->
			<div v-if="!searchValue" class="w-full mt-4">
				<div class="flex items-center justify-between">
					<span class="text-2xl text-white">Trending</span>
					<div
						class="text-sm text-lightgrey flex items-center transition-all delay-300"
						:style="{ opacity: isScrolling ? '0' : '1' }"
					>
						<span>Scrolling</span>
						<b-icon icon="arrow-right" class="ml-2 text-lg" />
					</div>
				</div>
				<div
					class="w-full overflow-x-auto gap-6 flex mt-4 horizontal-scroll"
					ref="horizontal-scroll"
					@mousewheel="scrollX"
				>
					<Card
						v-for="(movie, index) in trendingMovies"
						:key="index"
						:movie="movie"
						:size="'lg'"
					/>
				</div>
			</div>
			<!-- Recommended -->
			<div v-if="!searchValue" class="w-full mt-10 pb-10">
				<p class="text-2xl text-white">Recommended for you</p>
				<div class="w-full grid gap-y-20 gap-x-4 mt-4">
					<Card
						v-for="(movie, index) in recommendedMovies"
						:key="index"
						:movie="movie"
					/>
				</div>
			</div>
			<div v-else class="w-full mt-10 pb-10">
				<p class="text-2xl text-white">
					Found {{ filteredMovies.length }} results for '{{ searchValue }}'
				</p>
				<div class="w-full grid gap-y-20 gap-x-4 mt-4">
					<Card
						v-for="(movie, index) in filteredMovies"
						:key="index"
						:movie="movie"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
import Search from "@/components/Search.vue";
import Card from "@/components/Card.vue";
import { Movie } from "../types/movie";
import { ROOT_API, TMDB_API_KEY } from "../config/config";

@Component({
	components: {
		Navbar,
		Search,
		Card,
	},
})
export default class HomeView extends Vue {
	trendingMovies: Movie[] | undefined = [];
	recommendedMovies: Movie[] | undefined = [];
	filteredMovies: Movie[] | undefined = [];
	isScrolling = false;
	searchValue = "";

	private scrollX(event: WheelEvent) {
		const scrollContainer = this.$refs[
			"horizontal-scroll"
		] as HTMLElement | null;
		if (!scrollContainer) return;
		this.isScrolling = scrollContainer.scrollLeft !== 0;
		scrollContainer.scrollLeft += event.deltaY;
	}

	private async getTrendingMovies() {
		const response = await fetch(
			`${ROOT_API}/movie/top_rated?api_key=${TMDB_API_KEY}`,
			{
				method: "GET",
			}
		);
		const data = await response.json();
		return data.results;
	}

	private onChangeSearchValue(value: string) {
		this.searchValue = value;
		console.log(this.searchValue);
		this.filteredMovies = this.filteredMovies?.filter((movie) =>
			movie.title.toLowerCase().includes(this.searchValue.toLowerCase())
		);
		console.log(this.filteredMovies);
	}

	private async getRecommendedMovies() {
		const response = await fetch(
			`${ROOT_API}/movie/popular?api_key=${TMDB_API_KEY}`,
			{
				method: "GET",
			}
		);
		const data = await response.json();
		return data.results;
	}

	async created() {
		const trendingMovies = await this.getTrendingMovies();
		const recommendedMovies = await this.getRecommendedMovies();
		this.trendingMovies = trendingMovies;
		this.recommendedMovies = recommendedMovies;
		this.filteredMovies = [...trendingMovies, ...recommendedMovies];
	}
}
</script>
<style lang="scss" scoped>
.grid {
	grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
}
</style>
