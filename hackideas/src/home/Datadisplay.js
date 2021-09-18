import React,{useState,useEffect} from 'react'
//import { db } from "../firebase/Firebase";
import {database} from '../firebase/Firebase'
import './home.css'
import logo from '../image/bcdark.png'
import _ from 'lodash'
import { Button,Modal } from 'react-bootstrap'
import moment from "moment";
import Hack from '../image/hs.jpg'
import Switch from "react-switch";
import like from '../image/1136.png'


export default function Datadisplay() {

  const [taskdata, setTaskdata] = useState([]);
  const [minordata, setMinordata] = useState([]);
  const [checked, setChecked] = useState(false);
  const [dated, setDated] = useState(false);

  const [modalopen, setModalopen] = useState(false);
  const [modalnam, setModalnam] = useState('');
  const [modaldes, setModaldes] = useState('');

    useEffect(() => {
       fetchData();
       fetchDatas();
     //  checked ? fetchsortedarray() : fetchsortedarrayasec()
     console.log(checked)
      }, [])
    
    const fetchData=()=>{
      let ref = database.ref('Tasks');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      setTaskdata(state)
      //setMinordata(state)
      console.log(state);
    })
   
  }

  const fetchDatas=()=>{
    let ref = database.ref('Tasks');
  ref.on('value', snapshot => {
    const state = snapshot.val();
    
    setMinordata(state)
    console.log(state);
  })
 
}

  const handleChange=(checked)=>{
   
  setChecked(checked)
  checked ? fetchsortedarray() : fetchsortedarrayasec()
  
}

const modals=(nam,des)=>{
  setModalopen(true)
  setModalnam(nam)
  setModaldes(des)

}

const handledateChange=(dated)=>{
   
  setDated(dated)
  dated ? fetchsortedatedes() : fetchsortedate()
  console.log(dated)
}

 

  const likes=async(namees,va)=>{
    let usersauth = _.findKey(minordata, {'Taskname': namees});
 console.log(usersauth)
    let refs = database.ref(`Tasks/${usersauth}`).update({ rating: va + 1})
    //alert("thanksss")
  console.log( `Tasks/${usersauth}`)
 // var sortedObjs = _.sortBy( objs, 'first_nom' );
}

const fetchsortedarray=()=>{
  
var sortedObjs = _.orderBy( taskdata, 'rating', 'desc' );
//console.log(sortedObjs)
setTaskdata(sortedObjs)
//setChecked(checked)
}

const fetchsortedarrayasec=()=>{
  
  var sortedObjs = _.orderBy( taskdata, 'rating', 'asc' );
  //console.log(sortedObjs)
  setTaskdata(sortedObjs)
 // setChecked(checked)
  }
  

const fetchsortedate=()=>{
  
  var sortedObj = _.sortBy( taskdata, function(o) { return new moment(o.date).format('DD-MM-YYYY') })
 // var sortedObjs = _.orderBy( taskdata, function(o) { return new moment(o.date).format('DD-MM-YYYY'),['desc'] })
  //console.log(sortedObj)
  setTaskdata(sortedObj)
  }

  const fetchsortedatedes=()=>{
  
    var sortedObjes = _.sortBy( taskdata, function(o) { return new moment(o.date).format('DD-MM-YYYY') }).reverse()
    //var sortedOb = _.orderBy( taskdata, function(o) { return new moment(o.date).format('DD-MM-YYYY'),['asc'] })
  
    
    //console.log(sortedObjes)
    //console.log(sortedObjes)
    setTaskdata(sortedObjes)
    }

const mainList = Object.entries(taskdata).map(([key,value])=>{
  return (
      


<div class="card mb-5 mt-5" style={{width:'300px',height:'300px',margin:'auto',borderRadius: '10%',border:'red'}}>
  
  <div class="card-body">
    <h4 class="card-title">{value.Taskname}</h4>
    <p class="card-text">Votes: {value.rating}</p>
    <p class="card-text">Created Date: {value.date}</p>
    <div className='column'>
      <center>
      <div><button type='button' onClick={() =>likes(value.Taskname,value.rating)} className="btn btn-primary btn-sm mb-1"><img src={like} height='30px' width='30px' /><span style={{marginLeft:'15px'}}>Like</span></button></div>
      <div><button type='button' className="btn btn-primary btn-sm mb-1" onClick={() =>modals(value.Taskname,value.des)}>See discription</button></div>
      <div><button  type='button' className="btn btn-danger btn-sm">Solve</button></div>
      </center>
    </div>

  </div>
   </div>

  );
})

const petList = 
  <div class="card mb-5 mt-5 p-5" style={{width:'300px',height:'300px',margin:'auto',borderRadius: '10%',border:'red'}}>
  No data
  </div>
    
  
    return (
        <div>
        
<label>
        <span className='lv'>Lowest Votes</span>
        <Switch
             checked={checked}
            onChange={handleChange}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
          <span className='hv'>Highest Votes</span>
      </label>
      <label>
        <span style={{color:'white',marginRight:'10px',marginLeft:'20px'}}>Oldest</span>
        <Switch
             checked={dated}
            onChange={handledateChange}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
          <span style={{color:'white',marginRight:'10px'}}>Newest</span>
      </label>
  <div class="card-deck">
      <div className='row ' style={{paddingLeft:'50px',paddingRight:'50px',backgroundColor:'#07253D'}}>
  {taskdata.length == 0 ? petList : mainList}
  </div>
  <Modal show={modalopen} >
        <Modal.Header >
          <Modal.Title>{modalnam}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modaldes}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() =>setModalopen(false)}>
            Close
          </Button> 
        </Modal.Footer>
      </Modal>
</div>
          
        </div>
    )
}
