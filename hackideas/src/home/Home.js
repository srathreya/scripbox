

import React from 'react'
import _ from 'lodash'
import {  Navbar,Nav,Container } from 'react-bootstrap'
import Hack from '../image/hs.jpg'

export default function Home(props) {

 
    return (
        <div style={{height:'100vh',width:'100vw',overflowX:'hidden',backgroundColor:'#231F20'}} >
         <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#231F20'}} variant="dark">
  <Container>
  <Navbar.Brand >Hack Ideas</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link href="/mainpage" style={{width:'30vw'}}>Home</Nav.Link>
      <Nav.Link href="/addchallenge" style={{width:'30vw'}}>Add Challenge</Nav.Link>
     
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
<img src={Hack} className="imgwithborder" height='350px' width='100%'/>
{props.children}
        </div>
    )
}
