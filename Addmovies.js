import React, {useState , useContext } from 'react'
import { Button } from '../Button/Button.Component';
import { MoviesContext } from './MoviesProvider';
import './Addmovie.css'


const Addmovies = () => {
    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const [movies, setMovies] = useContext(MoviesContext);
    const addmovies = e => {
        e.preventDefault()
        setMovies(preMovies => [
            ...preMovies,
            {
                name: name,
                price: price
            }
        ]);
    }
    const UpdatePrice = (e) => {
        setprice(e.target.value)
    }
    const UpdateName = (e) => {
        setname(e.target.value)
    }


    return (
        <div>
            <form className='addmovie-box' onSubmit={addmovies}>
                <label htmlFor="name">Name of movie </label>
                <input type="text" name="name" onChange={UpdateName} />
                <label htmlFor="Price"> Price </label>
                <input type="text" name="price" onChange={UpdatePrice} />
                <Button className="submit">Add movies</Button>
            </form>
        </div>

    )
}

export default Addmovies
