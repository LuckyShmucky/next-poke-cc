import Head from 'next/head'
import PokemonList from '../components/PokemonList'
import { server } from '../config/index'

// add meta tags to each individual page to improve SEO
export default function Home({pokemon}) {
  console.log(pokemon)
  return (
    <div>
      <Head>
        <title>Pokemon Api Display</title>
        <meta name='keywords' content='web development, programming'/>
      </Head>
    
    
      <PokemonList pokemon={pokemon} />
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/multiplepokemon/`)
//   const pokemon = await res.json()
//   console.log('this is the server pokemon', pokemon.results)
  
//   return {
//     props: {
//       pokemon: pokemon.results
//     }
//   }
// }

export const getStaticProps = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon`)
  const pokemon = await res.json()
  console.log('this is the server pokemon', pokemon.results)
  
  return {
    props: {
      pokemon: pokemon.results
    }
  }
}