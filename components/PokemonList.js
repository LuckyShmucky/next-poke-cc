import React from 'react'
import pokemonStyles from '../styles/Pokemon.module.css'
import PokemonItem from './PokemonItem'
import Link from 'next/link'
const PokemonList = ({pokemon}) => {

  return (
    <div className={pokemonStyles.grid}>
        {pokemon.map((eachPokemon, key) => {
     return <PokemonItem pokemon={eachPokemon} />
    })}
  
    </div>
  )
}

export default PokemonList