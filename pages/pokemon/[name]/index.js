import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
//using the router allows us to get the information from the url which in this case would give us the name of the pokemon
const pokemon = ({pokemon}) => {
    // console.log(pokemon)
    // const router = useRouter()
    // const {id} = router.query
 
    return <div>
        <h1>
        An {pokemon.name} has appeared!
        </h1>
        <p>height: {pokemon.height}</p>
        {pokemon.forms.map((form, key) =>{
            return <p key={key}>
               {form.name} is one form for this species!
            </p>
        })}
        <br/>
        <Link href='/'>Go back</Link>
    </div>
  
}


// this allows us to fetch the data on the server and return the webpage with the needed data so the browser does not have to do the heavy lifting
// the first parameter that get server side props take is context
export const getStaticProps = async (context) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.params.name}`)
    const data = await res.json()
    // console.log(pokemon)
    let pokemon = {
        forms: data.forms,
        name: data.name,
        height: data.height
    }
    
    return {
        props: {
            pokemon,
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon`)

    const pokemon = await res.json()

    const names = pokemon.results.map(pokemon => pokemon.name)
    const paths = names.map(name => ({params: {name: name.toString()}}))
    return {
        paths,
        fallback: false,
    }
}
export default pokemon