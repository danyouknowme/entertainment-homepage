<template>
	<div class="flex w-full items-center">
		<b-icon icon="search" class="text-white text-lg my-3 mr-4"></b-icon>
		<input
			type="text"
			placeholder="Search for movies or TV series"
			class="flex-1 outline-none border-none text-white bg-transparent"
			@input="handleChange"
		/>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Search extends Vue {
	@Prop() value!: string;

	private handleChange(event: Event) {
		const target = event.target as HTMLButtonElement;
		if (target) {
			this.$emit("value-change", target.value);
		}
	}
}
</script>
