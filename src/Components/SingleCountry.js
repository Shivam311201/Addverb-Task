import React,{useContext,useState,useEffect} from "react";
import Navbar from "./NavBar";
import { countryContext } from "../ContextFolder/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { LoadingContext } from "../ContextFolder/loadingContext";
import { Row,Col } from "react-bootstrap";
import { dataContext } from "../ContextFolder/dataContext";
import { useParams } from "react-router";
import { CircularProgress } from "@material-ui/core";

function SingleCountry()
{
    const {name}=useParams();
    const [country, setCountry]=useContext(countryContext);
    const [data, setData]=useContext(dataContext);
    const [loading,setloading]=useContext(LoadingContext);
    const [winHeight,setHeight]=useState(window.innerHeight);
    const [winWidth,setWidth]=useState(window.innerWidth);

    data?.map((item)=>{
        if(item.name.official===name)
        setCountry(item);
    });
    console.log(country.languages);
    useEffect(() => {
        function handleResize() {
          setHeight(window.innerHeight);
          setWidth(window.innerWidth);
    }
        window.addEventListener('resize', handleResize)
    });

    return (<div className="body" style={{width:winWidth}}>
        <Navbar/>
        <div className="CountryBackground" style={{minHeight:winHeight-20}}>
        <div className="listOuterBox" style={winWidth<=500?{width:winWidth}:{}}>
        {loading&&<div className="load"><CircularProgress size="6rem"/></div>}
        {!loading&&<div>
        <div className="listTitle1">
        <img src={country.flags.png} className="flagImage"/>
        {country.name.official}</div>
        <Row style={{display:"flex"}}>
           <Col lg={3} md={3} sm={3} xs={3} className="detailsTitle">
           <FontAwesomeIcon icon={faCaretRight} size="md" className="arrow"/>Capital:
           </Col> 
           <Col lg={9} md={9} sm={9} xs={9} className="details">
            {country.capital}
           </Col> 
        </Row>
        <Row style={{display:"flex"}}>
           <Col lg={3} md={3} sm={3} xs={3} className="detailsTitle">
           <FontAwesomeIcon icon={faCaretRight} size="md" className="arrow"/>Region:
           </Col> 
           <Col lg={9} md={9} sm={9} xs={9} className="details">
            {country.region}
           </Col> 
        </Row>
        <Row style={{display:"flex"}}>
           <Col lg={3} md={3} sm={3} xs={3} className="detailsTitle">
           <FontAwesomeIcon icon={faCaretRight} size="md" className="arrow"/>Subregion:
           </Col> 
           <Col lg={9} md={9} sm={9} xs={9} className="details">
            {country.subregion}
           </Col> 
        </Row>
        <Row style={{display:"flex"}}>
           <Col lg={3} md={3} sm={3} xs={3} className="detailsTitle">
           <FontAwesomeIcon icon={faCaretRight} size="md" className="arrow"/>Population:
           </Col> 
           <Col lg={9} md={9} sm={9} xs={9} className="details">
            {country.population}
           </Col> 
        </Row>
        <Row style={{display:"flex"}}>
           <Col lg={3} md={3} sm={3} xs={3} className="detailsTitle">
           <FontAwesomeIcon icon={faCaretRight} size="md" className="arrow"/>Borders:
           </Col> 
           <Col lg={9} md={9} sm={9} xs={9} className="details">
               {country?.borders?.map((item,key)=>(
                   <div key={key}>{country.borders.length>1?key+1+") ":""} {item}</div>
               ))}
           </Col> 
        </Row>
        <Row style={{display:"flex"}}>
           <Col lg={3} md={3} sm={3} xs={3} className="detailsTitle">
           <FontAwesomeIcon icon={faCaretRight} size="md" className="arrow"/>Languages:
           </Col> 
           <Col lg={9} md={9} sm={9} xs={9} className="details">
           {Object.keys(country.languages)?.map((item,key)=>(
                   <div key={key}>{Object.keys(country.languages).length>1?key+1+") ":""} {item}</div>
               ))}
           </Col> 
        </Row>
        </div>}
        </div>
        </div>
    </div>)
}
export default SingleCountry;