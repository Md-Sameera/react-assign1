import React, { useState } from 'react'
import ClassComponent from './ClassComponent'
import Functional from './Functional'
import "./Styles.css"

const Preview = () => {

const [name1,SetName]=useState(false)

const [name2,SetName2]=useState(false)

  return (
  <>
  <div className='cont'>
  <br></br>
  <h1>Styling using Fuctional and ClassComponent</h1>

  <button className='bt1' onClick={()=>name1 ? SetName(false) : SetName(true)}>To see styling in functional component</button>
  <button className='bt2' onClick={()=>name2 ? SetName2(false) : SetName2(true)}>To see styling in class component</button>
  
  {name1&&<Functional />}
  {name2&&<ClassComponent />}
  </div>

  </>

  )
}

export default Preview
