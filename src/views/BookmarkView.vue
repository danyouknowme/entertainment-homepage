<template>
	<div class="home p-6 min-h-screen flex">
		<Navbar :page="'bookmark'" />
		<div class="w-full flex flex-col flex-1 ml-8 overflow-hidden">
			<div class="w-full pb-10">
				<div class="flex items-center justify-between">
					<p class="text-2xl text-white">Bookmarked Movies</p>
					<button
						class="border-2 border-white text-white py-1 px-5 rounded-md hover:bg-lightblack"
						@click="clearBookmarkMovies"
					>
						Clear All
					</button>
				</div>
				<div class="w-full grid gap-y-20 gap-x-4 mt-4">
					<Card
						v-for="(movie, index) in bookmarkMovies"
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
import Card from "@/components/Card.vue";
import { Movie } from "../types/movie";

@Component({
	components: {
		Navbar,
		Card,
	},
})
export default class BookmarkView extends Vue {
	bookmarkMovies: Movie[] = [];

	private getStorageMovies() {
		const storageMovies = localStorage.getItem("bookmarkMovies");
		this.bookmarkMovies =
			storageMovies !== null ? JSON.parse(storageMovies) : [];
	}

	private setStorageMovies() {
		localStorage.setItem("bookmarkMovies", JSON.stringify(this.bookmarkMovies));
	}

	private clearBookmarkMovies() {
		this.bookmarkMovies = [];
		localStorage.removeItem("bookmarkMovies");
	}

	created() {
		this.getStorageMovies();
	}
}
</script>

<style scoped lang="scss">
.grid {
	grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
}

button {
	font-family: "Rubik", sans-serif;
}
</style>
