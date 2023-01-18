import React, { useState } from 'react';

const App = () => {
  ;

  // ################## FUNCTIONS ###################
  const [tempValue, setTempValue] = useState(10);
  const [tempColor, setTempColor] = useState("cold");


  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    const increasedTemp = tempValue + 1;

    if (increasedTemp >= 18) {
      setTempColor('hot');
    }
    else if (increasedTemp >= 30)
    {
      setTempColor('to_hot');
    }
    
    setTempValue(increasedTemp)
    console.log("Iclicked");
  }

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    const decreasedTemp = tempValue - 1;
    if (decreasedTemp < 18) {
      setTempColor('cold');
      
    }
    else if(decreasedTemp < 5)
    {
      setTempColor('to_cold');
      
    }
    setTempValue(decreasedTemp);
    // alert("Here is the chiled cold time start be okay");
    console.log("Dclicked");
  }


  return (

    <div className='app-container'>
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>
          {tempValue}°C
        </div>
      </div>

      <div className='button-container'>
        <button onClick={handleClick1}>+</button>
        <button onClick={handleClick2}>-</button>
      </div>
      

    </div>

  )
};


export default App