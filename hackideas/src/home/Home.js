

import React,{useState,useEffect} from 'react'
//import { db } from "../firebase/Firebase";
import {database} from '../firebase/Firebase'
import './home.css'
import logo from '../image/bcdark.png'
import _ from 'lodash'
import { Button, Navbar,NavDropdown,Nav,Container } from 'react-bootstrap'
import moment from "moment";
export default function Home() {

  const [taskdata, setTaskdata] = useState([]);

    useEffect(() => {
       fetchData();
      }, [])
    const fetchBlogs=async()=>{
        const todoRef = database.ref('Tasks');
        const todo = {
          Taskname:'first task',
          from:'emp1',
          date: moment().format('DD-MM-YYYY').toString(),
          category: 'tech',
          des:'hellooo',
          rating: 0,
         
        };
    
        todoRef.push(todo)
    }

    const fetchData=()=>{
      let ref = database.ref('Tasks');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      setTaskdata(state)
      console.log(state);
    })
   
  }

  const fr=async(id)=>{
    
 console.log(moment().format('DD-MM-YYYY'))
// var sortedObjs = _.sortBy( objs, 'first_nom' );
}

  const fetchpirticular=async()=>{
     let refs = await database.ref('Tasks/-Mj_DHJnPR-HiS0j-ADR').update({ Taskname:'first very task'})
  console.log(refs)
 // var sortedObjs = _.sortBy( objs, 'first_nom' );
}

const fetchsortedarray=async()=>{
  
var sortedObjs = _.orderBy( taskdata, 'rating', 'desc' );
console.log(sortedObjs)
setTaskdata(sortedObjs)
}

const fetchsortedate=async()=>{
  
  var sortedObj = _.orderBy( taskdata, function(o) { return new moment(o.date).format('YYYYMMDD'); }, ['asec'])

  
  console.log(sortedObj)
  setTaskdata(sortedObj)
  }

const petList = Object.entries(taskdata).map(([key,value])=>{
  return (
      


<div class="card mb-5 mt-5" style={{width:'300px',height:'300px',margin:'auto',borderRadius: '10%',}}>
  
  <div class="card-body">
    <h4 class="card-title">{value.Taskname}</h4>
    <p class="card-text">{value.category}</p>
    <p class="card-text">{value.date}</p>
    <a href="#" class="btn btn-primary">See Profile</a>
    <a href="#" class="btn btn-primary">See Profile</a>
  </div>
</div>
  );
})
    return (
        <div style={{height:'100vh',width:'100vw',overflowX:'hidden'}} >
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Hack Ideas</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features" style={{width:'30vw'}}>Features</Nav.Link>
      <Nav.Link href="#pricing" style={{width:'30vw'}}>Pricing</Nav.Link>
     
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
  <div class="card-deck">
      <div className='row ' style={{paddingLeft:'50px',paddingRight:'50px',backgroundColor:'#F5F7FA'}}>



  {petList}
  </div>












</div>
            <button type="button" className="btn btn-dark" onClick={() =>fetchBlogs()} >Dark</button>
            <button type="button" className="btn btn-dark" onClick={() =>fetchpirticular()} >verydarkDark</button>
            <button type="button" className="btn btn-dark" onClick={() =>fetchsortedarray()} >darkDark</button>
            <button type="button" className="btn btn-dark" onClick={() =>fr('md')} >d</button>
            <button type="button" className="btn btn-dark" onClick={() =>fetchsortedate()} >date</button>
        </div>
    )
}
