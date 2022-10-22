import React from 'react'
import {useRouter} from 'next/router'
//using the router allows us to get the information from the url which in this case would give us the name of the pokemon
const pokemon = ({pokemon}) => {
    console.log(pokemon)
    // const router = useRouter()
    // const {id} = router.query
    return <div>An {pokemon.name} has appeared!</div>
  
}


// this allows us to fetch the data on the server and return the webpage with the needed data so the browser does not have to do the heavy lifting
// the first parameter that get server side props take is context
export const getServerSideProps = async (context) => {
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
            pokemon
        }
    }
}

export default pokemon