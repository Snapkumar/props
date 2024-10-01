import React from 'react'
import Fun from './child.js'

var Col=()=>{
    let name='Praveen'
    let obj={
        id:234,
        age:23
    }
    
    return(
       <div>
          <Fun name={name} obj={obj}/>
       </div>
    )
}
export default Col