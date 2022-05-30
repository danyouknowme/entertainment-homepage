<template>
	<div class="home p-6 min-h-screen flex">
		<Navbar :page="'home'" />
		<div class="w-full flex flex-col flex-1 ml-8 overflow-x-hidden">
			<Search />
			<!-- Trending -->
			<div class="w-full mt-4">
				<p class="text-2xl text-white">Trending</p>
				<div
					class="w-full overflow-x-auto gap-6 flex mt-4 horizontal-scroll"
					ref="horizontal-scroll"
					@mousewheel="scrollX"
				>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue"; // @ is an alias to /src
import Search from "@/components/Search.vue";
import Card from "@/components/Card.vue";

@Component({
	components: {
		Navbar,
		Search,
		Card,
	},
})
export default class HomeView extends Vue {
	private scrollX(event: WheelEvent) {
		const scrollContainer = this.$refs[
			"horizontal-scroll"
		] as HTMLElement | null;
		if (!scrollContainer) return;
		scrollContainer.scrollLeft += event.deltaY;
		// const scrollContainer = document.getElementById("horizontal-scroll");
		// if (!scrollContainer) return;
		// scrollContainer.scrollLeft += e.deltaY;
	}
}
</script>
