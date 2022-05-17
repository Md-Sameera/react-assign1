import React , { useState } from 'react';
import "./Styles.css"

export default function View() {
    
    const [fdata, setState]= useState([0]);
    const [records, setRecord]= useState([])
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState(values => ({...values, [name]: value}))
      };
       
    const  handleSubmit = (event)=>{
        event.preventDefault();
        const newRecord={...fdata}
        setRecord([...records,newRecord]);
        setState({ Name: "" , Department:"",Rating:""});
        event.preventDefault();
    };
  return (
    <>
    <form  onSubmit={handleSubmit}>
    <br/>
    <div><h1> EMPLOYEE FEEDBACK FORM </h1></div>
    <br/> <br/>
    <label> <b>Name  : </b>
       <input type="text" placeholder='Enter your name' name="Name" value={fdata.name} onChange={handleChange} />
       </label><br/> <br/>
    <label><b>Department  : </b>
        <input type="text" placeholder='Enter department' name="Department" value={fdata.dept} onChange={handleChange}  />
        </label><br/> <br/>
    <label> <b>Rating  : </b>
        <input type="number" placeholder='Rate here.' name="Rating" value={fdata.rat} onChange={handleChange} />
        </label><br/> <br/> <br/>
    <button > <b>Submit</b> </button>
        
    </form>
    <br/>
     <div className='result'>
         <br/>
         {
             records.map((currElem)=>{
                 return (
                    <div className='data'>
                         <b> Name : </b><p> {currElem.Name} ||</p> 
                         <b>Department :</b><p>{currElem.Department} || </p>
                         <b>Rating : </b><p>{currElem.Rating}</p>
                    </div>
                 )
             })
         }
        <br/>
     </div>
    </>
  );
}