import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useSelector } from "react-redux";
import { favoriActions } from "./components/store/reducers/favoriReducer";
import { useDispatch } from 'react-redux';
import { IconButton } from "@material-tailwind/react";

function App() {
  const [sira, setSira] = useState(0);
  const favMovies = useSelector(store =>store.favorites) ;
  const movies = useSelector(store => store.movies);
  const dispatch = useDispatch();
  const listede = useSelector(store => !!store.favorites.find(movie => movie.id === movies[sira].id))

  function sonrakiFilm() {
    setSira(sira + 1)
    if(sira === movies.length - 1){
      setSira(0)
    }
  }
  function oncekiFilm(){
    setSira(sira - 1)
    if(sira === 0){
      setSira(movies.length - 1)
    }
  }
  function enBasaDon(){
    setSira(0)
  }


  const listeyeEkle = () => {
    if (listede) {
      dispatch({
        type: favoriActions.removeFavorite,
        payload: movies[sira].id
      });
    } else {
      dispatch({
        type: favoriActions.addFavorite,
        payload: movies[sira]
      })
    }
  }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink to="/" exact className="py-3 px-6 border-collapse shadow-md border-gray-400 hover:bg-gray-300 font-semibold ease-in-out " activeClassName="bg-white shadow-sm text-blue-600 hover:bg-gray-300 ">
          Filmler
        </NavLink>
        <NavLink to="/listem" className="py-3 px-6 border-collapse shadow-md border-gray-400 hover:bg-gray-300 font-semibold ease-in-out" activeClassName="bg-white shadow-sm text-blue-600 hover:bg-gray-300">
          Favoriler
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} />

          <div className="flex gap-3 justify-end py-3">
          <button
              onClick={enBasaDon}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              En Başa Dön
            </button>
          <button
              onClick={oncekiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Önceki
            </button>

            <button
              onClick={sonrakiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Sonraki
            </button>
            <button className="select-none flex items-center text-center px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
            onClick={() => listeyeEkle(sira)} 
            >
             
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
              <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
             
            <span className="ml-2"></span>
            {listede ? 'Cikar' : 'Favoriye Ekle'}
            </button>

          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
