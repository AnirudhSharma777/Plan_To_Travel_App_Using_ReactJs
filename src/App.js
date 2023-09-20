import { useState } from "react";
import "./App.css";
import data from "./Components/Data";
import Tours from "./Components/Tours";
function App() {

  const [tours,setTours] = useState(data);

  function remove(id){
    const newtours = tours.filter((tour) => tour.id !== id);
    setTours(newtours);
  }


  if(tours.length === 0){
    return (<div className="flex flex-col justify-center items-center h-[100vh]">
      <h1 className="text-[25px] font-medium">No Tours Left</h1>

      <button onClick={() =>{setTours(data)}} 
      className="mt-[10px] text-[16px] px-14 p-2 border-slate-100 bg-slate-200 font-medium rounded-md hover:bg-slate-50">
        Refresh
      </button>
    </div>);
  }
  return (
    <div >
      <Tours Tours={tours} remove ={remove}></Tours>
    </div>
  );
}

export default App;
