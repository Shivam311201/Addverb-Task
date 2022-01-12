import React, {useContext, useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { LoadingContext } from "../ContextFolder/loadingContext";
import { dataContext } from "../ContextFolder/dataContext";
import { Link } from "react-router-dom";
import "./styles.css";

const fetch_data=fetch("https://restcountries.com/v3.1/region/asia")
.then((resposne)=>resposne.json())
.then((data)=>{
  return data;
});

function Navbar()
{
    const [loading,setloading]=useContext(LoadingContext);
    const [data,setData]=useContext(dataContext);

    const MyData=async()=>
    {
      const a=await fetch_data;
      setData(a);
      setloading(false);
    }

    return (<div className="NavBackground">
        <div className="NavTitle">
        <Link to="/" style={{textDecoration:"none",color:"white"}}>
        <FontAwesomeIcon icon={faLayerGroup} size="lg" className="logo"/>
        CountryPedia
        </Link>
        </div>
        <div>
        <FontAwesomeIcon icon={faSyncAlt} size="lg" className={"Refresh "+(loading?" RefreshRotate":"")} onClick={()=>MyData()}/>  
        </div>
    </div>)
}
export default Navbar;