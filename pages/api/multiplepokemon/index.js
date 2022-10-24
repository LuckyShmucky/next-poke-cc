// import {pokemon} from '../../../data'


export default async function handler(req, res){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
    const pokemon = await response.json()
    res.status(200).json(pokemon.results)
    // res.status(200).json(pokemon)
}