<script setup lang="ts">
import { computed } from 'vue'
import { defineProps } from 'vue'
import { statlabels, pokemonTypes, pokemonColors} from "@/helpers/data.ts"
import StatPokemon from "@/components/StatPokemon.vue"
import AbilityPokemon from "@/components/AbilityPokemon.vue"

const prop = defineProps<{
  details: any
}>()

const details = computed(()=> prop.details)

</script>

<template>
  <div class="card" :style="{ backgroundColor:  pokemonColors[details.types[0].type.name] }">
    <div class="img">
      <img :src="details?.sprites?.front_default" alt="sla">
    </div>
    <div class="title">
      <h3>{{ details.name }}</h3>
    </div>
      <div 
        class="type">
          <div class="tag" v-for="(ability,index) in details.types" 
          :key="index" :style="{ backgroundColor:  pokemonColors[ability.type.name ] }">
          <strong>
            {{ pokemonTypes[ability.type.name] }}
          </strong>
          </div>
        
      </div>
    <div class="info">
      <div class="info-size">
        <p class="mr-5"><strong> Peso: {{ details.height }}</strong></p>
        <p><strong> Altura: {{ details.weight }}</strong></p>
      </div>
        <h3>Habilidades:</h3>
      <div 
        class="ability-group" 
         >
        <AbilityPokemon :style="{ backgroundColor:  pokemonColors[details.types[0].type.name] }" 
          v-for="(ability,index) in details.abilities" 
          :key="index" 
          :tag="ability"/>
      </div>
      <div 
        class="stat">
          <StatPokemon class="d-flex" v-for="(stat,index) in details.stats" 
          :key="index" :details="stat"/>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
.card{
  width: 618px;
  height: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 10px;
}
.d-flex{
  display: flex;
}
.card .img{
  height: 200px;
  width: 200px;
  display: flex;
  margin: auto;
}
.info{
  margin: 10px 40px;
  padding: 10px;
  font-size: 16px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
}
.title{
  color: #d9d9d9;
}
.type{
  margin: 0 40px;
  justify-content: center;
  display: flex;
  color: #fff;
}
h3{
  font-weight: 600;
}
strong{
  font-weight: 500;
}
.card .title{
  color: #000;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
}

.tag{
  padding: 5px 20px;
  margin: 2px;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
}

.stats-field{
  width: 30%;
  display: flex;
}
.info-size{
  display: flex;
  justify-content: center;
}
.mr-5{
  margin-right: 5px;
}
.bar{
  margin-top: 5px;
  height: 15px;
  width: 70%;
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius:10px
}
.ability-group{
  display: flex;
  margin: 10px 0;
  text-align: center;
}
.ability-group h3{
  display: flex;
  justify-content: center;
  text-align: center;
}
.ability-group .tag{
  color: #fff;
}
.bar-stat{
  border-radius: 10px;
  height: 100%;
}
@media (max-width: 700px) {
  .card{
    width: 300px;
    height: 600px;
  }
  .card .img{
    height: 200px;
    width: 200px;
    display: flex;
    margin: auto;
  }
}
</style>
