import React,{useState,useEffect} from 'react'
import {database} from '../firebase/Firebase'
import _ from 'lodash'
import { Form } from 'react-bootstrap'
import moment from "moment";
import { useHistory } from "react-router-dom";

export default function Addchalenge() {
  const history = useHistory();
    const [values, setValues] = useState({
        name: '',
        des: '',
       tag:''
      });
      const formDefaultValues={
        tags:'',
       
    }
    const [formValues,setFormValues]=useState(formDefaultValues)
    const {tags}=formValues
      
     
    
       function handleChanges(e){
        const target=e.target
        setFormValues(prevState=>({
            ...prevState,
            [target.name]:target.value
        }))
       
    }
     
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
     
      const adddata=()=>{
        const todoRef = database.ref('Tasks');
        const todo = {
          Taskname:values.name,
          from:localStorage.getItem("id"),
          date: moment().format('DD-MM-YYYY').toString(),
          category: tags == '' ? 'feature' : tags,
          des:values.des,
          rating: 0,
         
        };
    
        todoRef.push(todo)
        console.log(values.name,values.des,tags)
        history.push("/mainpage")
    }
    return (
      <div class="card mb-5 mt-5" style={{width:'50vw',height:'auto',margin:'auto',borderRadius: '10%'}}>
  
      <div class="card-body">
      <form>
  <div class="form-group">
    <label for="channame">Name of your Challenge</label>
    <input type="text" class="form-control" id="channame" aria-describedby="emailHelp" placeholder="Enter name" value={values.name}
                          onChange={handleChange('name')}/>
   
  </div>
  
  <div class="form-group">
    <label for="exampleFormControlTextarea1">The Problem</label>
    <textarea class="form-control mb-5" id="exampleFormControlTextarea1" rows="3" value={values.des}
                          onChange={handleChange('des')}></textarea>
  </div>
  <label for="exampleFormControlSelect1">Tag</label>
  <select name={'tags'} 
                        onChange={handleChanges}>
      <option value='feature'>feature</option>
      <option value='Tech'>Tech</option>
      <option value='Algorithm'>Algorithm</option>
     
    </select>
  
</form>

<button type="button" class="btn btn-primary mt-5" onClick={()=>adddata()}>Submit</button>
        
      </div>
    </div>
    )
}
