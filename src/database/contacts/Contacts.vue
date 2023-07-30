<script setup lang="ts">
import { onUnmounted } from "vue";

import App from "@/App.vue";
import Card from "@/components/Card.vue";

const copied: Record<string, boolean> = $ref({});
const timeouts: number[] = [];
async function copy(text: string, id: string) {
	copied[id] = true;
	await navigator.clipboard.writeText(text);
	timeouts.push(setTimeout(() => copied[id] = false, 500));
}

onUnmounted(() => {
	for (const i of timeouts) clearTimeout(i);
});
</script>

<template>
	<App>
		<Card>
			<template #header>
				Online Resources
			</template>
			<h3>Private</h3>
			<span
				class="o-link--clickable o-info-bicolumn-display"
				@click="copy('a@b.com', 'email');"
			>
				<div>
					Email:
					<i v-if="copied.email">(Copied)</i>
				</div>
				<div>[insert email here]</div>
			</span>
			<span
				class="o-link--clickable o-info-bicolumn-display"
				@click="copy('12345678', 'phone');"
			>
				<div>
					Phone:
					<i v-if="copied.phone">(Copied)</i>
				</div>
				<div>[insert phone no. here]</div>
			</span>
			<br>
			<h3>Public</h3>
			<a
				class="o-link--clickable o-info-bicolumn-display"
				href="https://www.instagram.com/"
				target="_blank"
			>
				<div>Instagram:</div><div>[Insert instagram link here]</div>
			</a>
			<br>
			<br>
			<a
				href="/"
				class="c-button-style-link"
			>
				&lt;&lt; Homepage
			</a>
		</Card>
		<Card>
			<template #header>
				Ex-committees
			</template>
			<b>Chairperson</b>
			<br>Andrew So
			<br>Harvard Business School Alumni
			<br><br>
			<b>President</b>
			<br><br>
			<b>Vice-President</b>
			<br><br>
			<b>Internal Secretary</b>
			<br><br>
			<b>External Secretary</b>
			<br><br>
			<b>Publication Secretary</b>
			<br><br>
			<b>Treasurer</b>
		</Card>
	</App>
</template>

<style scoped>
.o-link--clickable {
	text-decoration: inherit;
	cursor: pointer;
	font-weight: inherit;
}
</style>