import './App.css';
import React, {useState} from 'react'

function App() {
const [tempInput,setTempInput]=useState('');
const [fromType,setFromType]=useState('celsius');
const [toType,setToType]=useState('fahrenheit');
const [result,setResult]=useState();
const [value,setValue]=useState(false)
const [error,setError]=useState('')

const handleSubmit=() =>{
  console.log('button Clicked');
  let temperature;
  if(tempInput === ''){
    setValue(false);
    setError('Please enter a value')
    // alert('Please enter a value')
  }
 if(tempInput !== '' && fromType === 'celsius' && toType === 'fahrenheit'){
    setValue(true);
    temperature = (parseFloat(tempInput)*1.8)+32;
    setResult(temperature.toFixed());
  }else if(tempInput !== '' && fromType === 'fahrenheit' && toType === 'celsius'){
    setValue(true);
    temperature = (parseFloat(tempInput)-32)*5/9;
    setResult(temperature.toFixed(0));
  }else{
    setResult(tempInput);
  }
}
  
  return (
    <div className='App'>
      <h1>Temperature Converter</h1>
      <hr></hr>
      <div className='container'>
      <input type='number' value={tempInput} onChange={(e)=>setTempInput(e.target.value)} placeholder='Enter Temperature Value' required></input>
      <label>Type:</label>
      <select value={fromType} onChange={(e)=>setFromType(e.target.value)}>
        <option value='celsius'>Celsius</option>
        <option value='fahrenheit'>Fahrenheit</option>
      </select><br></br>
      <label>To:</label>
      <select value={toType} onChange={(e)=>setToType(e.target.value)}>
        <option value='fahrenheit'>Fahrenheit</option>
        <option value='celsius'>Celsius</option>
      </select><br></br>
      <button id='submit' onClick={()=>handleSubmit()}>Calculate</button><br></br>

      {value?(
        <p className='result'>
      {tempInput} degree {fromType} is {result} degrees {toType} </p>):(<p id='error'>{error}</p>)
      }
      </div>
    </div>
  );
}

export default App;
