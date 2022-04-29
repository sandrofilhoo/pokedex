export interface Ability{
    name: string
}
  
export interface Stat{
    name:string
}
  
export interface Sprites{
    front_default:string
}

export interface Type{
    name: string
}

export interface ObjectType{
    type: Type
}
  
export interface Pokemon {
    url:string,
    position:number,
    abilities: Ability[],
    sprites:Sprites,
    types: ObjectType[],
    name: string,
    height: number,
    weight: number,
    stats: Stat[]
}
  