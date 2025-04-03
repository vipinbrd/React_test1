import { useContext } from "react";
import { NotesContext } from "./store/store";

export function NotesData({searchKey}) {
    const { data, dispatch } = useContext(NotesContext);

    function clickHandler(id) {
        dispatch({ type: "DELETE", payload: { id } });
    }

    return (
        <div className="w-full max-w-lg mx-auto mt-6">
            {data.length === 0 ? (
                <p className="text-center text-gray-400">No notes available</p>
            ) : (
                <ul className="space-y-4">
                    {data.filter((ele)=>{
                        return ele.title.includes(searchKey)||ele.description.includes(searchKey)
                    }).map((ele) => (
                        <li
                            key={ele.id}
                            className="bg-gray-800 text-white p-4 rounded-lg shadow-md flex flex-col gap-2"
                        >
                            <p className="text-lg font-semibold">{ele.title}</p>
                            <p className="text-gray-300">{ele.description}</p>
                            <button
                                onClick={() => clickHandler(ele.id)}
                                className="mt-2 bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded transition"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
