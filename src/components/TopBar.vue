<script setup lang="ts">
import LogoPath from "@/assets/logo.png";

import { Pages } from "@/database/page-list";

import { computed, ref } from "vue";

const getScroll = (function() {
	if (window.pageYOffset === undefined) {
		const scrollElement = document.documentElement || document.body;
		if (scrollElement) return () => scrollElement.scrollTop;
		return () => 0;
	}
	return () => window.pageYOffset;
}());

const scroll = ref(0);
const maxLogoSize = ref(60);
const minLogoSize = 40;
const maxTitleSize = ref(2.4);
const minTitleSize = 1.5;
const logoSize = computed(() => Math.max(
	(maxLogoSize.value - minLogoSize) * (1 - scroll.value / 250),
	0
) + minLogoSize);
const titleSize = computed(() => `${Math.max(
	(maxTitleSize.value - minTitleSize) * (1 - scroll.value / 250),
	0
) + minTitleSize}em`);

const showMobileTabList = ref(false);

addEventListener("scroll", () => scroll.value = getScroll());
maxTitleSize.value = Math.max(Math.min(innerWidth / 300, 2.4), 1.5);
maxLogoSize.value = Math.max(Math.min(innerWidth / 12, 60), 40);
addEventListener("resize", () => {
	maxTitleSize.value = Math.max(Math.min(innerWidth / 300, 2.4), 1.5);
	maxLogoSize.value = Math.max(Math.min(innerWidth / 12, 60), 40);
	if (innerWidth > 680) showMobileTabList.value = false;
});
</script>

<template>
	<div class="c-topbar">
		<div
			class="c-topbar__title"
			:style="{
				fontSize: titleSize
			}"
		>
			<img
				class="c-topbar__logo-image"
				:src="LogoPath"
				:width="logoSize"
				:height="logoSize"
				alt="SOCS logo"
			>
			<h1 class="c-topbar__title-text">
				<span class="c-title--first-line">SOLOMON</span>
				<br>
				<span class="c-title--second-line">Student Ambassadors</span>
			</h1>
		</div>
		<button
			class="fas fa-bars c-topbar__tab-list"
			aria-label="Open list of tabs"
			label="Open list of tabs"
			tabindex="1"
			@click="showMobileTabList = !showMobileTabList"
		/>
		<div class="c-topbar__tab-buttons">
			<a
				v-for="page in Pages"
				:key="page.name"
				:href="page.url"
				class="c-topbar__tab-button"
			>{{ page.name }}</a>
		</div>
	</div>
	<div
		:class="{
			'c-mobile-tab-list': true,
			'c-mobile-tab-list--show': showMobileTabList
		}"
	>
		<div class="c-topbar c-topbar--fake">
			<div
				class="c-topbar__title"
				:style="{
					fontSize: titleSize
				}"
			>
				<img
					class="c-topbar__logo-image"
					:src="LogoPath"
					:width="logoSize"
					:height="logoSize"
					alt="SOCS logo"
				>
				<h1 class="c-topbar__title-text">
					<span class="c-title--first-line">SOLOMON</span>
					<br>
					<span class="c-title--second-line">Student Ambassadors</span>
				</h1>
			</div>
			<div class="c-topbar__tab-buttons">
				<a
					v-for="page in Pages"
					:key="page.name"
					class="c-topbar__tab-button"
				>{{ page.name }}</a>
			</div>
		</div>
		<div class="c-mobile-tab-buttons">
			<a
				v-for="page in Pages"
				:key="page.name"
				:href="page.url"
				class="c-mobile-tab-button"
			>{{ page.name }}</a>
		</div>
	</div>
	<div class="c-topbar c-topbar--fake">
		<div
			class="c-topbar__title"
			:style="{
				fontSize: titleSize
			}"
		>
			<img
				class="c-topbar__logo-image"
				:src="LogoPath"
				:width="logoSize"
				:height="logoSize"
				alt="Solomon Student Ambassador logo"
			>
			<h1 class="c-topbar__title-text">
				<span class="c-title--first-line">SOLOMON</span>
				<br>
				<span class="c-title--second-line">Student Ambassadors</span>
			</h1>
		</div>
		<div class="c-topbar__tab-buttons">
			<a
				v-for="page in Pages"
				:key="page.name"
				class="c-topbar__tab-button"
			>{{ page.name }}</a>
		</div>
	</div>
</template>

<style scoped>
.c-topbar {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
	width: 100%;
	border-bottom: 5px solid var(--colour-accent--orange);
	padding-top: 10px;
	text-align: center;
	backdrop-filter: blur(2px);
}

.c-topbar::before {
	content: "";
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	background-color: var(--colour-accent--blue);
	filter: brightness(0.8);
	opacity: 0.6;
}

.c-topbar--fake {
	position: static;
	visibility: hidden;
}

.c-topbar__title {
	width: 100%;
	text-align: left;
	padding-left: 20px;
	font-size: 2.4em;
	line-height: 1.2;
	font-weight: 900;
	margin: 10px;
	color: var(--colour-accent--orange-light);
}

.c-topbar__title-text {
	display: inline-block;
	margin: 0;
    margin-left: 15px;
    text-align: left;
	font-size: 1em;
	vertical-align: middle;
}

.c-title--second-line {
	font-size: 0.7em;
	font-weight: normal;
}

.c-topbar__logo-image {
	border-radius: 10%;
	vertical-align: middle;
}

.c-topbar__tab-list {
	display: none;
	background-color: transparent;
	border: none;
	outline: none;

	color: var(--colour-accent--orange-light);
	font-size: 2.4em;
	position: absolute;
	right: 10px;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
}

.c-topbar__tab-buttons {
	position: relative;
	width: 100%;
	margin-top: 10px;
	text-align: left;
}

.c-topbar__tab-buttons::before {
	content: "";
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	background-color: var(--colour-accent--blue);
	filter: brightness(0.4);
	opacity: 0.5;
}

.c-topbar__tab-button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-width: 100px;
	height: 50px;
	padding: 0 10px;
	color: var(--colour-accent--orange-light);
	border-right: 1px solid var(--colour-accent--orange-light);
	text-decoration: none;
	transition: color 0.1s, background-color 0.1s;
}

.c-topbar__tab-button:hover {
	background-color: var(--colour-accent--orange-light);
	color: black;
}

.c-mobile-tab-list {
	position: fixed;
	z-index: 1;
	width: 100%;
	height: 100%;
	background-color: #0008;
	display: flex;
	flex-direction: column;
	align-items: end;

	visibility: hidden;
	transform: translateX(100%);
	opacity: 0;
	transition: transform 0.3s, visibility 0.3s, opacity 0.2s;
}

.c-mobile-tab-list--show {
	visibility: visible;
	transform: none;
	opacity: 1;
}

.c-mobile-tab-buttons {
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 100%;
	width: 200px;
	border-left: 3px solid var(--colour-accent--orange);
}

.c-mobile-tab-buttons::before {
	content: "";
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	background-color: var(--colour-accent--blue);
	opacity: 0.8;
	filter: brightness(0.3);
}

.c-mobile-tab-button {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 90%;
	height: 50px;
	padding: 0 10px;
	color: var(--colour-accent--orange-light);
	border-bottom: 1px solid var(--colour-accent--orange-light);
	text-decoration: none;
	transition: color 0.1s, background-color 0.1s, width 0.1s;
}

.c-mobile-tab-button:hover {
	background-color: var(--colour-accent--orange-light);
	color: black;
	width: 100%;
}

@media screen and (max-width: 680px) {
	.c-topbar__tab-list {
		display: block;
	}

	.c-topbar__tab-buttons {
		height: 0;
		visibility: hidden;
	}
}
</style>