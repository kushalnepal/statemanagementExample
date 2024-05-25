import React, { useContext } from 'react'
import { MoviesContext } from './MoviesProvider'
export const Film = () => {

    const [movies] = useContext(MoviesContext)
    return (
        <>
            <p>{movies.length}</p>
            <h2>State management</h2>
            {
                movies.map((movie) => (
                    <div>
                        
                        <movie name={movie.name}
                               price={movie.price} 
                               key={movie.id} 
                               /> 
                               <div style={{display:"inline"}}>
                               <small>{movie.name}</small>
                               <br></br>
                               <small>{movie.price}</small>
                               <br></br>
                               <small>{movie.id}</small>
                               <br></br>
                               </div>
                    </div>
                    
                ))
            }
        </>
    )
}