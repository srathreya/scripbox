import React, { useState } from "react";
import './landing.css'
import Users  from "../Users";
import _ from 'lodash'
import { useHistory } from "react-router-dom";

export default function Landing() {

const history = useHistory();
const [empId, setempId] = useState('');

const handleUserName = e => {
 setempId(e.target.value)};

const getUserAuthentication = () => {
  var usersauth = _.filter(Users, {'empid': empId,});
 //console.log(usersauth,empId)
if(usersauth.length > 0 ){
  localStorage.setItem("id",empId)
  history.push("/mainpage")
  
}else{
alert('invalid')
}}
      
    return (
        <div>

            <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 outerbackground'>
<center>
            
 <h1 style={{color:'white',fontSize:'100px'}} data-testid='heading'>HACK IDEAS</h1>
 <p style={{color:'white',fontSize:'50px'}}>#CodingTheFuture</p>
  <input type="text" name="username" onChange={handleUserName} placeholder="enter emp id" data-testid="countvalue" />
  <button type="button" class="btn btn-primary m-5" data-testid="submitRefButton" onClick={() =>getUserAuthentication()} >Submit</button>
  

  

</center>

            </div>
            
        </div>
    )
}
