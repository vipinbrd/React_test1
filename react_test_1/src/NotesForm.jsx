import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { NotesContext } from "./components/store/store";

export function NotesForm({ onClose }) {
 const[title,setTitle]=useState("")   
 const[description,setDescription]=useState("")
 

const{data,dispatch}=useContext(NotesContext)

function submitHandler(e){
    e.preventDefault();
    
    dispatch({
        type:"INSERT",
        payload:{
            title,description,id:Math.random().toString() 
        }
    })
    onClose()
}
console.log(data)
    return createPortal(
        <>
           
            <div
                className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
                onClick={()=>onClose() }
            ></div>


            <div className="fixed inset-0 flex items-center justify-center">
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-xl font-semibold text-white mb-4">Add Note</h2>
                   
                    <form onSubmit={submitHandler} className="space-y-3">
                        <div>
                            <label htmlFor="title" className="block text-gray-300">Title</label>
                            <input 
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                                id="title" 
                                placeholder="Enter title here" 
                                className="w-full mt-1 p-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="desc" className="block text-gray-300">Description</label>
                            <textarea 
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                                id="desc" 
                                placeholder="Enter description here" 
                                className="w-full mt-1 p-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="3"
                            ></textarea>
                        </div>

                        <div className="flex justify-end space-x-2">
                            <button 
                                type="button" 
                                onClick={onClose}
                                className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
                            >
                                Close
                            </button>
                            <button 
                                type="submit" 
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                            >
                                Add
                            </button>
                        </div>
                       
                    </form>
                    </div>
                </div>
        
        </>,
        document.querySelector("#backdrop")
    );
}
