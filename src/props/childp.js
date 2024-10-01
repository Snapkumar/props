import React from 'react';

var Cls=(data)=>{
    return(
        <div>
            <h2>{data.name}</h2>
            <h3>{data.obj.id}</h3>
            <h4>{data.obj.age}</h4>
        </div>
    )
}
export default Cls