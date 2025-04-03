import React,{ useEffect, useState } from "react";

export function SearchBar(props) {
    const [searchValue, setSearchValue] = useState("");
    useEffect(()=>{
     const id= setTimeout(()=>{
            props.onSearch(searchValue)
        },200)
        return ()=>{
            clearTimeout(id)
        }
    },[searchValue])

    function handleOnChange(event) {
        setSearchValue(event.target.value);
       
    }

    return (
        <div className="w-3/4 mx-auto flex items-center bg-gray-800 p-2 rounded-lg">
            <label htmlFor="search" className="text-white text-sm font-medium">
                Search notes:
            </label>
            <input
                id="search"
                type="text"
                value={searchValue}
                onChange={handleOnChange}
                className="ml-3 flex-1 bg-gray-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type to search..."
            />
        </div>
    );
}
