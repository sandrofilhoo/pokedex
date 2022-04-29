import axios from "axios";
import type { Pokemon } from "@/helpers/interface.ts"

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
  });
 
  
export default {
    async get(url:string):Promise<Pokemon>{
        const { data } = await api.get(url)
        return data
    },

    async getListUrls():Promise<any>{
        const { data } = await api.get('/pokemon/1')
        return data.results
    },

    async getList():Promise<Pokemon>{
        const { data } = await api.get('/pokemon')
        return data.results
    }
};