<script setup lang="ts">
import { ref, onMounted, reactive, computed } from "vue"
import CardPokemon from "@/components/CardPokemon.vue"
import CardInfo from "@/components/CardInfo.vue"
import api from "@/services/api.ts"
import Header from "@/components/Header.vue"

interface Details {
	array: Array<any>
}

const state = reactive({ pokemons: [] })

onMounted(async () => {
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
	<Header/>
	<div class="wrapper">
		<div class="info">

			<CardInfo v-if="pokemonDetais" :details="pokemonDetais" />
    </div>
		<div class="pokemon-group">
			<CardPokemon
				v-for="(pokemon,index) in pokemons"
				:key="index"
				:item="pokemon"
        		:position="index"
				:url="pokemon.url"
				@pokemon-info="handleCardClick"
			/>
		</div>
	</div>
</template>

<style>
@import "@/assets/base.css";
.pokemon-group {
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
