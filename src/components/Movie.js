import { useSelector } from "react-redux";
import { movies } from "./../movies";

export default function Movie(props) {
  const movie = useSelector(store => store.movies[props.sira])

  return (
    <div className="flex bg-gray-200 shadow-2xl items-start rounded-lg ">
      <img src={movie.posterUrl} alt={movie.title} className="max-w-[18rem] w-2/5 block shadow-2xl" />
      <div className="p-8 flex flex-col gap-4 text-sm">
        <div>
          <h2 className="text-2xl font-bold">{movie.title}</h2>
          <p className="italic text-sm">{movie.genres.join(', ')}</p>
        </div>
        <p className="">{movie.plot}</p>
        <div className="flex flex-col sm:flex-row">
          <span className="w-1/3 font-light">Yönetmen</span>
          <span className="flex-1 font-semibold">{movie.director}</span>
        </div>
        <div className="flex flex-col sm:flex-row">
          <span className="w-1/3 font-light">Oyuncular</span>
          <span className="flex-1 font-semibold">{movie.actors}</span>
        </div>
        <div className="flex text-sm gap-1 justify-end">
          <span className="block px-2 py-1 rounded border border-zinc-400 hover:bg-red-700 hover:text-white ">{movie.year}</span>
          <span className="block px-2 py-1 rounded border border-zinc-400 hover:bg-red-700 hover:text-white">{movie.runtime}dk</span>
        </div>
      </div>
    </div>
  )
};