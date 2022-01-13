import React,{useContext} from "react";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { countryContext } from "../ContextFolder/countryContext";
import { useNavigate } from "react-router";
import "./styles.css";

function List(props) {
    const [country, setCountry]=useContext(countryContext);
    const navigate=useNavigate();

    function setList(item)
    {
      setCountry(item);
      navigate("/"+item.name.official);
    }

    return (<div>
    <div className="listTitle">
    <FontAwesomeIcon icon={faCaretRight} size="lg" className="arrow"/>Asia</div>
    <div>
    {props.data.map((item,key)=>(
      <div key={key} className="countryersityName" onClick={()=>setList(item)}>
      <div>-&nbsp;&nbsp;</div>
      <div> {item.name.official}</div>
      </div>))}
    </div>
    </div>);
}
export default List;