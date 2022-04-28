import axios from "axios";


const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
  });
  
export default {
    async get(url:string):Promise<any>{
        const { data } = await api.get(url)
        // console.log(data)
        return data
    },

    async getListUrls():Promise<any>{
        const { data } = await api.get('/pokemon/1')
        // console.log(data)
        return data.results
    },

    async getList():Promise<any>{
        const { data } = await api.get('/pokemon')
        // console.log(data.results)
        return data.results
    }
};