

import React from 'react'
import _ from 'lodash'
import {  Navbar,Nav,Container } from 'react-bootstrap'
import Hack from '../image/1138.jpg'
import logo from '../image/logo.svg'


export default function Home(props) {

 
    return (
        <div style={{height:'100vh',width:'100vw',overflowX:'hidden',backgroundColor:'#07253D'}} >
         <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#07253D'}} variant="dark">
  <Container>
  <Navbar.Brand href="#home">
      <img
        src={logo}
        width="50"
        height="30"
        className="d-inline-block align-top"
        
      />
    </Navbar.Brand>
  <Navbar.Brand >Hack Ideas</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
   
  
   
  
    
    <Nav className="me-auto justify-content-end">
    <Nav.Link href="/mainpage" >Home</Nav.Link>
      <Nav.Link className="justify-content-end" href="/addchallenge" >Add Challenge</Nav.Link>
     
    </Nav>
    
    
  </Navbar.Collapse>
  </Container>
</Navbar>
<img src={Hack} className="imgwithborder" height='350px' width='100%'/>
{props.children}
        </div>
    )
}
