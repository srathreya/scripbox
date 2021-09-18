import React,{useState,useEffect} from 'react'
import {database} from '../firebase/Firebase'
import _ from 'lodash'

import moment from "moment";
import { useHistory } from "react-router-dom";

export default function Addchalenge() {

  const [taskdata, setTaskdata] = useState([]);
  const history = useHistory();
  const formDefaultValues={
    cname: '',
    des: '',
    tags:'',}
    const [formValues,setFormValues]=useState(formDefaultValues)
    const {tags,des,cname}=formValues
    useEffect(() => {
      fetchData();
     // fetchDatas();
    //  checked ? fetchsortedarray() : fetchsortedarrayasec()
   // console.log(checked)
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
    function handleChanges(e){
    const target=e.target
    setFormValues(prevState=>({
    ...prevState,
    [target.name]:target.value }))
    }
    const adddata=()=>{
      const todoRef = database.ref('Tasks');
      const todo = {
        Taskname:cname,
        from:localStorage.getItem("id"),
        date: moment().format('DD-MM-YYYY').toString(),
        category: tags == '' ? 'feature' : tags,
        des:des,
        rating: 0,
       
      };
  
      todoRef.push(todo)
      console.log(cname,des,tags)
      history.push("/mainpage")
  } 
  const addchallenge = () => {
    if(cname=='' || des==''){
alert('fill all fields')
    }else{
      var usersauth = _.filter(taskdata, {'Taskname': cname,});
      if(usersauth.length == 0){
        adddata()
      }
      else{
        alert("same Name Cant exist")
      }
    }
  };    

    
     

    
    return (
      <div class="card mb-5 mt-5" style={{width:'50vw',height:'auto',margin:'auto',borderRadius: '10%'}}>
  
      <div class="card-body">
      <form>
  <div class="form-group">
    <label for="channame" style={{fontSize:'20px',fontWeight:'bold'}}>Name of your Challenge</label>
    <input type="text" class="form-control" id="cname" aria-describedby="emailHelp" placeholder="Enter Task name" 
                    data-testid="cname" name={'cname'} 
                          onChange={handleChanges}/>
   
  </div>
  <br/>
  <div class="form-group">
    <label for="exampleFormControlTextarea1" style={{fontSize:'20px',fontWeight:'bold'}}>The Problem</label>
    <textarea class="form-control mb-5" id="exampleFormControlTextarea1" rows="3" name={'des'} 
                        data-testid="desname" onChange={handleChanges}></textarea>
  </div>
  <label for="exampleFormControlSelect1" style={{fontSize:'20px',fontWeight:'bold'}}>Tag</label>
  <select name={'tags'} 
                        onChange={handleChanges}>
      <option value='feature'>feature</option>
      <option value='Tech'>Tech</option>
      <option value='Algorithm'>Algorithm</option>
     
    </select>
  
</form>
<center>
<button type="button" class="btn btn-primary mt-5" data-testid="cbutton" onClick={()=>addchallenge()}>Submit</button>
        </center>
      </div>
    </div>
    )
}
