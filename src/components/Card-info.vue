<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { defineProps } from 'vue'


const labels = {
  "hp":"Vida",
  "attack":"Ataque",
  "defense":"Defesa",
  "special-attack":"Ataque especial",
  "special-defense":"Defesa especial",
  "speed":"Velocidade"
}

const labelTypes = {
  "normal":"Normal",
  "fire":"Fogo",
  "water":"Água",
  "grass":"Grama",
  "flying":"Voador",
  "fighting":"Lutador",
  "poison":"Veneno",
  "electric":"Elétrico",
  "ground":"Terra",
  "rock":"Pedra",
  "psychic":"Psíquico",
  "ice":"Gelo",
  "bug":"Inseto",
  "ghost":"Fantasma",
  "sSteel":"Ferro",
  "dragon":"Dragão",
  "dark":"Sombrio",
  "dairy":"Fada"
}

const labelColors = {
  "normal":"#563317",
  "fire":"#A92500",
  "water":"#2D3192",
  "grass":"#E3AFF1",
  "flying":"#79DAFD",
  "fighting":"#C6AC01",
  "poison":"#741F7C",
  "electric":"#FEFF01",
  "ground":"#BA3B0E",
  "rock":"#5D6162",
  "psychic":"#044318",
  "ice":"#fff",
  "bug":"#FB151F",
  "ghost":"#222126",
  "steel":"#C1C1C5",
  "dragon":"#FC6D21",
  "dark":"#000000",
  "dairy":"#FF3078"
}

const prop = defineProps<{
  details: any
}>()

const details = computed(()=> prop.details)

</script>

<template>
  <div class="card" :style="{ backgroundColor:  labelColors[details.types[0].type.name] }">
    <div class="img">
      <img :src="details?.sprites?.front_default" alt="sla">
    </div>
    <div class="title">
      <h3>{{ details.name }}</h3>
    </div>
      <div 
        class="type">
          <div class="tag" v-for="(ability,index) in details.types" 
          :key="index" :style="{ backgroundColor:  labelColors[ability.type.name ] }">
          <strong>
            {{ labelTypes[ability.type.name] }}
          </strong>
          </div>
        
      </div>
    <div class="info">
      <div class="info-size">
        <p><strong> Peso: {{ details.height }}</strong></p>
        <p><strong> Altura: {{ details.weight }}</strong></p>
      </div>
      <div 
        class="ability" 
        v-for="(ability,index) in details.abilities" 
        :key="index" >
        <p>
          <strong>
            {{ ability.ability.name }}
          </strong>
        </p>
      </div>
      <div 
        class="stat">
          <p v-for="(ability,index) in details.stats" 
          :key="index">
          <strong>
            {{ labels[ability.stat.name] }}: {{ ability.base_stat }}
          </strong>
          </p>
        
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
.card .img{
  height: 200px;
  width: 200px;
  display: flex;
  margin: auto;
}
.info{
  margin: 20px 40px;
  padding: 10px;
  font-size: 16px;
  background-color: #d9d9d9;
  border: 1px solid #000;
  border-radius: 5px;
}
.title{
  color: #d9d9d9;
}
.type{
  margin: 0 40px;
  padding: 5px;
  justify-content: center;
  display: flex;
  color: #fff;
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
  padding: 5px 10px;
  margin: 2px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
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
