import React from 'react'

const Post = (props) => {
    const{name} = props



    return (
        <div className='container'>

            <div className='poster'>

                <ul>

                    {props.name.results && props.name.results.map((pokemon)=> (
                        <li className='poke-list' key={pokemon.name}> {pokemon.name} </li>
                    ))}
                </ul>
                
            </div>
        </div>
    )
}

export default Post