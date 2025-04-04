import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { NotesForm } from './NotesForm';
import { NotesData } from './components/NotesData';

function App() {
  const [isShowed, setIsShowed] = useState(false);
  const [totalNotes, setTotalNotes] = useState(0);
  const [showing, setShowing] = useState(0);
  const[searchKey,setSearchKey]=useState("")

  function showedHandler() {
    setIsShowed((prev) => !prev);
  }

  function HandleAddNotes() {
    showedHandler();
  }
 function handleOnSearch(data){
  setSearchKey(data);
///////
 }
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <div className="w-full max-w-lg">
        <SearchBar onSearch={handleOnSearch} />

        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">Total Notes: {totalNotes}</p>
          <p className="text-lg font-semibold">Showing: {showing}</p>
        </div>

        <button 
          className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md py-2 px-4 transition"
          onClick={HandleAddNotes}
        >
          Add Notes
        </button>
      </div>
    <NotesData searchKey={searchKey}/>

      {isShowed && <NotesForm onClose={showedHandler} />}
    </div>
  );
}

export default App;
