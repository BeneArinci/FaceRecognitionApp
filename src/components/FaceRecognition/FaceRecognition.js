import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  return (
   <div className="center ma">
     <div className="center mt2">
      <img id = "inputimage" alt = "img" src = {imageUrl} width='500px' heigh='auto'/>
     </div>
   </div>

  )
}

export default FaceRecognition