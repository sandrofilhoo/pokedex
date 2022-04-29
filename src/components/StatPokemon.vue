<script setup lang="ts">
import { computed } from 'vue'
import { defineProps } from 'vue'
import { statlabels, pokemonTypes, pokemonColors} from "@/helpers/data.ts"
import type { Stat } from "@/helpers/interface.ts"

const prop = defineProps<{
  stat: Stat
}>()

const stat = computed(()=> prop.stat)

</script>

<template>
    <div class="d-flex">
        <div class="stats-field">
            <strong>{{ statlabels[stat.stat.name] }}: {{ stat.base_stat }}</strong>
        </div>
        <div class="bar">
            <div class="bar-stat" :style="{ backgroundColor:  stat.base_stat < 50 ? 'red' : 'green',width: stat.base_stat < 100 ? stat.base_stat+'%' : 100+'%' }"></div>
        </div>
    </div>
</template>


<style scoped>
strong{
  font-weight: 500;
}
.card .title{
  color: #000;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
}

.stats-field{
  width: 30%;
  display: flex;
}
.bar{
  margin-top: 5px;
  height: 15px;
  width: 70%;
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius:10px
}
.bar-stat{
  border-radius: 10px;
  height: 100%;
}
</style>
