import React from 'react'
import { useState } from 'react'

const App = () => {
  const [height , setheight] = useState ("");
  const [weight , setweight] = useState ("");
  const [result , setresult] = useState ("");

  const calculateBMI = ()=>{
    if(!height || !weight){
      setresult("please input height,weight")
      return
    }

    const heightInMeater = Number(height)/100;
    const bmi = (Number(weight)/(heightInMeater * heightInMeater));

    let catagory = "";
    if(bmi <18.5) catagory = "Under weight";
    else if (bmi<25) catagory = "Normal Weight";
    else if (bmi < 30) catagory = "over weight";
    else catagory = "Obess";
    setresult(bmi.toFixed(1) + " - " +catagory)
  }

  return (
    <div className='container'>
      <h1>BMI calculator</h1>
      <label htmlFor='height'>Height (cm)</label>
      <input type='number' name='height' placeholder='e.g. 170' value={height}
      onChange={(e) => setheight (e.target.value)}
      />

      <label htmlFor='weight'>Weight</label>
      <input type='number' name='weight' placeholder='e.g.65' value={weight}
      onChange={(e)=> setweight(e.target.value)}
      ></input>
      <button onClick={calculateBMI}>Calculate</button>
      <div className='result'>BMI is: {result}</div>
    </div>
  )
}

export default App
