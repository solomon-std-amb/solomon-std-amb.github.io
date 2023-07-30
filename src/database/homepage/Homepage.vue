<script setup lang="ts">
import App from "@/App.vue";
import Card from "@/components/Card.vue";

import Photo from "@/assets/grp-photo.jpg";
</script>

<template>
	<App>
		<div class="l-image-container">
			<img
				:src="Photo"
				class="c-top-image"
				alt="Group Photo of 2022 PMLP graduates"
			>
			<img
				:src="Photo"
				class="c-top-image--wide"
				aria-disabled="true"
			>
		</div>
		<Card>
			<template #header>
				Demo
			</template>
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
			>google.com</a>
			<br><br>
			<a
				href="/events/"
				class="c-button-style-link"
			>
				Other page >>
			</a>
		</Card>
		<Card>
			<template #header>
				Who we are
			</template>
			From different schools in HK.
			<br>
			Project M² Leadership Program Graduates.
			<br>
			Financial Literacy is an important part of our well-being.
			<br>
			Practice Leadership, Embrace Technology and Application.
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
.l-image-container {
	display: flex;
	position: relative;
	z-index: 0;
	width: 100%;
	overflow: hidden;
	justify-content: center;
}

.l-image-container::before {
	content: "";
	position: absolute;
	z-index: 1;
	bottom: 0;
	width: 100%;
	height: 20%;
	background: linear-gradient(transparent, var(--colour-background) 95%);
}

.c-top-image {
	width: 100%;
	max-width: 1000px;
	box-shadow: 0 0 40px 6px rgba(0, 0, 0, 0.8);
}

.c-top-image--wide {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	overflow: hidden;
	filter: blur(16px);
	z-index: -1;
}
</style>