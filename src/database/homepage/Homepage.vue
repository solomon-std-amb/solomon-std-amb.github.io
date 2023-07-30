<script setup lang="ts">
import App from "@/App.vue";
import Card from "@/components/Card.vue";
</script>

<template>
	<App>
		<Card>
			<template #header>
				Welcome to our homepage!
			</template>
			[ Rough description of what SSA will do ]
			<br>
			TODOS:
			<br>
			Light/Dark theme support
			<br>
			Chinese/English language
			<br>
			Improved screenreader support
			<br>
			Improved graphics for header
			<br>
			<br>
			Demo link:
			<a
				href="http://www.google.com/"
				target="_blank"
			>google.com</a>,
			<br>
		</Card>
		<Card>
			<template #header>
				Events
			</template>
			[ Rough description of current and future events ]
			<br>
			<br>
			<a
				href="/events/"
				class="c-button-style-link"
			>
				Event Details >>
			</a>
		</Card>
		<Card>
			<template #header>
				Executive Committee
			</template>
			<b>Chairperson:</b>
			<br>
			Siu ming
			<br>
			Siu Ming College
			<br><br>

			<b>Vice Chairperson:</b>
			<br>
			Siu mei
			<br>
			Siu Mei College
			<br><br>

			<b>Internal Secretary:</b>
			<br>
			Siu man
			<br>
			Siu Man College
			<br><br>
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