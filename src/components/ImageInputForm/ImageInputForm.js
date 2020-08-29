import React from 'react';
import './ImageInputForm.css'

const ImageInputForm = () => {
  return (
   <div>
     <p className = 'f3'>
       {'This Magic Brain will detect faces in your pictures, give it a try'}
     </p>
     <div className = 'center'>
       <div className="pa4 br3 shadow-5 w-50 form center">
        <input type = 'text' className="f4 pa2 w-50 center" />
        <button className = 'w-20 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
       </div>
       
     </div>
   </div>

  )
}

export default ImageInputForm