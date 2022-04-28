<script setup lang="ts">
import { ref, onMounted, reactive, computed } from 'vue'
import { defineProps } from 'vue'
import api from '@/services/api.ts'


interface Item {
  url: number;
  name: string;
}

const prop = defineProps<{
  item: Item
  position: number
}>()

const emit = defineEmits(['pokemonInfo'])

var pokemon = ref<any>({})

onMounted(async () => {
  pokemon.value = await api.get(prop.item.url)
})

const currentImg = computed(()=>{
  if(pokemon.value?.sprites?.front_default)
    return pokemon.value.sprites.front_default

  return null
})
</script>

<template>
  <div class="card" @click="emit('pokemonInfo',pokemon)">
    <div class="img">
      <img :src="currentImg" :alt="prop.item.name">
    </div>
    <div class="title">
      <h3>#{{ prop.position + 1 }}
        </h3>
        <strong>{{ prop.item.name }}</strong>
    </div>
  </div>
</template>

<style scoped>
.card{
  cursor: pointer;
  width: 300px;
  height: 340px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 10px;
  background-color: #fff;
}
/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
h3{
  text-align: center;
  color: #868686;
}
strong{
  font-weight: 500;
  color: #000;
}
.card .img{
  padding-top: 20px;
  display: flex;
  margin: auto;
}
img{
  height: 200px;
  width: auto;
  display: flex;
  margin: auto;
  background-color: #F2F2F2;
  border-radius: 10px;
}

.card .title{
  color: #000;
  text-align: center;
  text-transform: uppercase;
  border-radius: 10px;
  margin-top: 20px;
}

</style>
