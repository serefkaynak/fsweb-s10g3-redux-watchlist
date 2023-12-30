import { favoriActions } from "./store/reducers/favoriReducer";
import { useDispatch } from "react-redux";



export default function FavMovie({ title, id }) {

  const dispatch = useDispatch();

  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
      <div className="pr-4 flex-1 font-semibold hover:rounded ">{title}</div>
      <button className="px-4 py-2 block font-extrabold rounded-full border border-gray-500 hover:bg-rose-700 hover:text-white opacity-30 group-hover:opacity-100"
      onClick={() => {
        dispatch({ 
          type: favoriActions.removeFavorite, payload:id });
      }}
      >
        -
      </button>
    </div>
  );
}
