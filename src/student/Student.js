import React, { useState } from 'react'

const Student = () => {
 const [math, setMath]= useState("");
 const [eng, setEng]= useState("");
 let result=null;

 function mathChange(e){
  setMath(e.target.value)
   }


  function engChange(e){
    setEng(e.target.value)
  }

  if(math !=="" && eng !==""){
    if(math<33  || eng<33){
      result="fail";
    }else{
      result="pass";
    }
    
  }




  return (
    <>
        <div className='py-4 bg-light'>
        <h2 className='text-center py-3 bg-primary mt-3'> Test Our Result</h2>
        <div className='d-flex justify-content-around'>
          <div className=''>s.n</div>
          <div className=''>ravi</div>
          <div className=''>
            <input type="text"  value={math} onChange={mathChange} />
            <input type="text"  value={eng} onChange={engChange} />
          </div>
          <div className=''>{result}</div>
        </div>

        </div>
    </>
  )
}

export default Student;