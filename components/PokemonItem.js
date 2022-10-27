import Link from 'next/link'
import pokemonStyles from '../styles/Pokemon.module.css'

const PokemonItem = ({pokemon}) => {
    return (
        <Link href="/pokemon/[name]" as={`/pokemon/${pokemon.name}`}>
        <div className={pokemonStyles.card}>
            <h3>{pokemon.name} &rarr;</h3>
            <p>This is the url to find this pokemon: {pokemon.url}</p>
        </div>
          </Link>   
  )
}

export default PokemonItem