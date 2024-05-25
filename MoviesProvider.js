import React,{ useState ,createContext} from 'react';
export const MoviesContext = createContext();

export const MoviesProvider =(props)=>{
     const [movies,setMovies] = useState ([
        {
            name:'Harry potter',
            price:'$10',
            id:"626d66"
        },
        {
            name:'Game of thorone',
            price:'$15',
            id:'22f2325'
        },
        {
            name:'inception',
            price:'$16',
            id:'4455j89'
        }
     ])

    return(
        <MoviesContext.Provider value={[movies,setMovies]}>
          {props.children}
        </MoviesContext.Provider>
    )
}