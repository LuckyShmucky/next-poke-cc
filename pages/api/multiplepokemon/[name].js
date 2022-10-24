// import {pokemon} from '../../../data'


export default async function handler({query: {name}}, res){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
    const pokemon = await response.json()
    
    const filtered = pokemon.results.filter(pokemon => pokemon.name === name) 
   
    if(filtered.length > 0){
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json(
        {
            message:
    `Pokemon with the name of ${name} is not found`
        })
   }
}