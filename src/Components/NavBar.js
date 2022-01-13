import React, {useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { LoadingContext } from "../ContextFolder/loadingContext";
import { Link } from "react-router-dom";
import "./styles.css";

function Navbar()
{
    const [loading,setloading]=useContext(LoadingContext);

    function RefreshPage()
    {
      window.location.reload();
    }

    return (<div className="NavBackground">
        <div className="NavTitle">
        <Link to="/" style={{textDecoration:"none",color:"white"}}>
        <FontAwesomeIcon icon={faLayerGroup} size="lg" className="logo"/>
        CountryPedia
        </Link>
        </div>
        <div>
        <FontAwesomeIcon icon={faSyncAlt} size="lg" className={"Refresh "+(loading?" RefreshRotate":"")} onClick={()=>RefreshPage()}/>  
        </div>
    </div>)
}
export default Navbar;