import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useSelector } from "react-redux";
import { favoriActions } from "./components/store/reducers/favoriReducer";
import { useDispatch } from 'react-redux';

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

  const listeyeEkle = () => {
    if (listede) {
      dispatch({
        type: favoriActions.removeFavorite,
        payload: movies[sira]
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
        <NavLink to="/" exact className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Filmler
        </NavLink>
        <NavLink to="/listem" className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} />

          <div className="flex gap-3 justify-end py-3">
          <button
              onClick={() => setSira(0)}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Sıfırla
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
              Sıradaki
            </button>
            <button className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
            onClick={() => listeyeEkle(sira)} 
            >
            {listede ? 'Listeden Çıkar' : 'Listeye Ekle'}
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
