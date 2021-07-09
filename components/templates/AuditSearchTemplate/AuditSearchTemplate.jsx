import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import { Box, Grid, makeStyles } from '@material-ui/core'
//import SearchField from "react-search-field"
import AuditImageHeader from '../../organisms/audit/AuditImageHeader'
import AuditImageTitle from '../../organisms/audit/AuditImageTitle'
import AuditPageTemplate from '../AuditPageTemplate'
import AuditStart from '../../organisms/audit/AuditStart/AuditStart'
import CustomText from '../../atoms/CustomText'
import LabelList from '../../organisms/audit/LabelList'
import { withRouter } from 'next/router'

var isSearched = false;
var images = [];
for(var i=1; i<33; i++) {
  var index = i%5+1
  var dir = "/image" +index+".png"
  var idval = "cb"+i
  images.push(<div style={{float:"left"}}><input type="checkbox" style = {{transform : "scale(1.2)"}} id={idval}/>
  <label for={idval} style={{display:"block", 
                           position: "relative", margin:"0px",
                           cursor: "pointer"}}><Image style={{
    display: "inline",
    margin: "auto",
    maxHeight: "300px",
    maxWidth: "300px",
    padding: "10px"
  }} fluid src={dir} />   </label></div>
  );
}
var images2 = [];
images2.push(<div style={{float:"left"}}><input type="checkbox" style = {{transform : "scale(1.2)"}} id="cb1"/>
<label for="cb1" style={{display:"block", 
                         position: "relative", margin:"0px",
                         cursor: "pointer"}}><Image style={{
  display: "inline",
  margin: "auto",
  maxHeight: "300px",
  maxWidth: "300px",
  padding: "10px"
}} fluid src="/image3.png" />   </label></div>
);
images2.push(<div style={{float:"left"}}><input type="checkbox" style = {{transform : "scale(1.2)"}} id="cb2"/>
<label for="cb2" style={{display:"block", 
                         position: "relative", margin:"0px",
                         cursor: "pointer"}}><Image style={{
  display: "inline",
  margin: "auto",
  maxHeight: "300px",
  maxWidth: "300px",
  padding: "10px"
}} fluid src="/image5.png" />   </label></div>);

//$('Image').click(function(){ console.log("hi")});
class AuditSearchTemplate extends Component {
  constructor() {
    super()
    this.state = {
      name: 'React',
      value:'',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.images = [];

  }

    handleChange(event){
      this.setState({value: event.target.value});
    }
    handleSubmit(event) {
      if(event.key==="Enter") {
        isSearched = !isSearched;
        console.log(isSearched);
        this.images = [];
        console.log(this.images);
        this.setState({value: event.target.value})
      event.preventDefault()
    }
  }



    //const BarStyling = {width:"100rem",background:"#F2F1F9", padding:"1.0rem", fontSize:"24px"};
    //const TextStyling = {fontSize:"16px", paddingLeft:"1.0rem"};
    //const SelectStyling = {paddingLeft: "100rem", fontSize:"20px"};
  
  


  render() {
    
    
    return (
      <>
      <div style={{float:"left", paddingBottom:"5px", paddingTop:"10px", paddingLeft:"10px"}}>
      <div>
      <text style = {{fontSize:"16px", paddingLeft:"1.0rem", paddingRight:"30.0rem"}}>
      Type keywords to search for images:
      </text>
      </div>
      <div>
        <input
          searchbar
          style = {{width:"50rem",background:"#F2F1F9", padding:"1.0rem", fontSize:"24px", display:"inline"}}
          onKeyDown = {this.handleSubmit}
          placeholder="E.g. danger, crime, bad"
        />
        <button style = {{padding: "15px 32px",fontSize:"16px"}} onClick={(e) => {e.preventDefault();
         window.location.href = "/project/audit2";}} >Start Auditing</button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <text style = {{fontSize:"24px"}}>
        Google Computer Vision Dataset  
        </text> 
        </div>
        </div>
        <div style = {{fontSize:"24px", paddingLeft:"150px", display:"inline"}}>
        <label for="Filters">Filter by: </label>
        <select name="Filters" id="filters" >
        <option value="Label">Label</option>
        <option value="Time">Time</option>
        <option value="Source">Source</option>
        <option value="Gender">Gender</option>
  </select>
        </div>
        <div style = {{display:isSearched ? "inline" : "none"}}><text style = {{fontSize:"24px", float:"right", paddingRight:"400px"}}>
        Filters Applied: 
        </text> 
        <text style = {{fontSize:"24px", float:"right", paddingRight:"400px"}}>
        gun (Label) <span class="close">x</span>
        </text> 
        </div>
        <br/>
        <br/>
        <br/>
        <div style={{width: "100%", height: "400px", overflowY: 'scroll', borderStyle:"solid", borderWidth:"2px", padding:"10px"}}>
         {isSearched ? images2 : images}
        </div>




      </>
    )
  }
}

export default withRouter(AuditSearchTemplate)
