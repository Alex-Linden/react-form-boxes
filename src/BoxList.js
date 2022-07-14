import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

/** TODO: Place your state that contains all of the boxes here. This component should 
 * render all of the Box components along with the NewBoxForm component.
 * 
 * props: none 
 * state: boxes (list of boxes)
 * 
 * BoxList->NewBoxForm
 * BoxList->Box
 * */

function BoxList(){
  const [boxes, setBoxes] = useState([]);
  console.log('BoxList', boxes);

  /** Add new box to list of boxes */
  function addBox(box){
    const newBox = {...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  /** Remove box from list of boxes */
  function removeBox(id){
    const newBoxes = boxes.filter(box => box.id !== id);
    setBoxes(newBoxes);
  }

//flipCellsAroundMe={evt => flipCellsAround(coord)}
  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {boxes.map(box=>(<Box 
        height={box.height}
        width={box.width}
        backgroundColor={box.backgroundColor}
        removeBox={evt => removeBox(box.id)}
        key={box.id}
        />))}
    </div>  
  );
}

export default BoxList;