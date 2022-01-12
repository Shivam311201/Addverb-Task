import React,{useContext,useState} from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { dataContext } from "./ContextFolder/dataContext";
import { LoadingContext } from "./ContextFolder/loadingContext";
import Home from "./Components/Home";
import SingleCountry from "./Components/SingleCountry";
  
export const fetch_data=fetch("https://restcountries.com/v3.1/region/asia")
.then((resposne)=>resposne.json())
.then((data)=>{
  return data;
});

function App()
{
  const [data,setData]=useContext(dataContext);
  const [loading,setloading]=useContext(LoadingContext);

  const MyData=async()=>
  {
    const a=await fetch_data;
    setData(a);
    setloading(false);
  } 
  MyData();

    return (<Router>
       <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/:name" element={<SingleCountry/>}/>
       </Routes>
     </Router>);
}

export default App;