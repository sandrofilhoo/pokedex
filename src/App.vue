<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import { ref, onMounted, reactive, computed } from "vue"
import HelloWorld from "@/components/HelloWorld.vue"
import Card from "@/components/Card.vue"
import CardInfo from "@/components/Card-info.vue"
import api from "@/services/api.ts"

interface Pokemon {
	url: string
	name: string
}
interface Details {
	array: Array<any>
}

const state = reactive({ pokemons: [] })
var showCard: boolean = false

onMounted(async () => {
	showCard = true
	state.pokemons = await api.getList()
})
const pokemons = computed(() => {
	return state.pokemons
})

const pokemonDetais = ref<Details| null>(null)

const handleCardClick = (data: Details) => {
	pokemonDetais.value = data
}
</script>

<template>
	<header>
		<img
			alt="Pokedex"
			class="logo"
			src="@/assets/Pokemon-Yellow-Logo-No-Background.png"
			width="200"
			height="70"
		/>
	</header>
	<div class="wrapper">
		<div class="info">

			<CardInfo v-if="pokemonDetais" :details="pokemonDetais" />
    </div>
		<div class="line">
			<Card
				v-for="(pokemon,index) in pokemons"
				:key="index"
				:item="pokemon"
        :position="index"
				:url="pokemon.url"
				@pokemon-info="handleCardClick"
			/>
		</div>
	</div>
	<!-- <RouterView /> -->
</template>

<style>
@import "@/assets/base.css";
.line {
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
  max-height: 600px;
  overflow: auto;
  text-align: justify;
  word-break: break-all;
}
#app {
	font-weight: normal;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 2px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #d9d9d9;
  border-radius: 10px;
}
header {
  background-color: #DC2626;
	width: 100%;
	line-height: 1.5;
  padding: 10px;
	max-height: 120vh;
}

.logo {
	display: block;
  margin: auto;
}

.wrapper {
	display: flex;
	padding: 0 6rem;
}


@media (max-width: 700px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  .wrapper {
    display: grid;
    padding: 0 2rem;
  }
  .line{
    overflow: none;
  }
}
</style>
