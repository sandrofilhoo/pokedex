<script setup lang="ts">
import { computed } from 'vue'
import { defineProps } from 'vue'
import { statlabels, pokemonTypes, pokemonColors} from "@/helpers/data.ts"

const prop = defineProps<{
  tag: any
}>()

const tag = computed(()=> prop.tag)

</script>

<template>
    <div class="tag">
        <strong>
          {{ tag.ability.name }}
        </strong>
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
