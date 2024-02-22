import './App.css';
import React, {useState} from 'react'

function App() {
  const [height,setHeight]=useState()
  const [weight,setWeight]=useState()
  const [bmi,setBmi]=useState()
  const [conclude,setConclude]=useState('')
  const [color,setColor]=useState("")

 const handleCalculate = () =>{
      const heightInMeters = height / 100;
      const bmiValue = weight/(heightInMeters*heightInMeters);
      setBmi(bmiValue.toFixed(2))
      if(bmiValue<18.5){
        setConclude('UnderWeight');
        setColor('Blue')
      }else if (bmiValue>=18.5 && bmiValue<24.9){
        setConclude('Normal Weight');
        setColor('Green')
      }else if(bmiValue>=25 && bmiValue<29.9){
        setConclude('Over Weight');
        setColor('Yellow')
      }else if(bmiValue>=30 && bmiValue<39.9){
        setConclude("Obesity");
        setColor('Orange')
      }else{
        setConclude('Extreme Obesity');
        setColor('Red')
      }
  }


  return (
    <div className="App container">
      <div style={{backgroundImage:"linear-gradient(red,white)"}}>
      <h1>Body Mass Index</h1>
      <hr />
      </div>
      <div>
          <label htmlFor='height'>Height (cm) :</label>
          <input type='number' value={height} onChange={(e)=>setHeight(e.target.value)} />
      </div>
      <div>
          <label htmlFor='height'>Weight (kg) :</label>
          <input type='number' value={weight} onChange={(e)=>setWeight(e.target.value)} />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      <div className='bmi-menu'>
        <div>
        <h3>BMI : {bmi}</h3>
        <p><strong style={{color:color}}>{conclude}</strong></p>
        </div>
        <div className='category'>
          <p>(0-18.5) -Underweight</p>
          <p>(18.5 - 24.9) - Normal Weight</p>
          <p>(25-29.9) - Over Weight</p>
          <p>(30-39.9) - Obesity</p>
          <p>('--40')Extreme Obesity</p>
        </div>
      </div>
    </div>
  );
}

export default App;
