import React,{useState,useEffect} from 'react'
import {database} from '../firebase/Firebase'
import _ from 'lodash'
import { Form } from 'react-bootstrap'
import moment from "moment";

export default function Addchalenge() {

    const [values, setValues] = useState({
        name: '',
        des: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
      useEffect(() => {
        fetchBlogs();
       }, [])
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
     
      const fetchBlogs=()=>{
        // const todoRef = database.ref('Tasks');
        // const todo = {
        //   Taskname:values.name,
        //   from:'emp1',
        //   date: moment().format('DD-MM-YYYY').toString(),
        //   category: 'tech',
        //   des:values.des,
        //   rating: 0,
         
        // };
    
        // todoRef.push(todo)
        console.log(values.name)
    }
    return (
        <div className='col-5'>
     <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Challenge name</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Challenge Description</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Select aria-label="Floating label select example" value={values.name}
                          onChange={handleChange('amount')}>
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Form.Select>

</Form>
        </div>
    )
}
