

import React,{useState,useEffect} from 'react'
//import { db } from "../firebase/Firebase";
import {database} from '../firebase/Firebase'
export default function Home() {


    useEffect(() => {
        fetchData();
      }, [])
    const fetchBlogs=async()=>{
        const todoRef = database.ref('Tasks');
        const todo = {
          Taskname:'first task',
          from:'emp1',
          date: '00/00/000',
          category: 'tech',
          rating: 0,
         
        };
    
        todoRef.push(todo)
    }

    const fetchData=()=>{
      let ref = database.ref('Tasks');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      
      console.log(state);
    })
   
  }

  const fetchpirticular=async()=>{
     let refs = await database.ref('Tasks/-Mj_DHJnPR-HiS0j-ADR').update({ rating: 1})
  console.log(refs)
}
    return (
        <div>
            <button type="button" className="btn btn-dark" onClick={() =>fetchBlogs()} >Dark</button>
            <button type="button" className="btn btn-dark" onClick={() =>fetchpirticular()} >verydarkDark</button>
        </div>
    )
}
