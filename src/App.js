
import './App.css';
import {useState} from 'react'

function App() {

  const[result,setResult]=useState("")

  const buttonClick=(e)=>{
    setResult(result.concat(e.target.name))

  }

  const resultClick=()=>{
    try{
    setResult(eval(result))
    }
    catch{
      setResult("ErroR")
    }

  }

  const clearClick=()=>{
    setResult("")

  }
  const deleteClick=()=>{
    
    setResult(result.slice(0,result.length-1))   
   

  }


  return (
    
        <div className="container">  
     
        
       <input type='textbox' name="#" value={result}>
        </input> 
       
             
      
      <div className="keypad">
        <button name="C" onClick={deleteClick}>C</button>
       <button name="C"  onClick={clearClick}>clear</button>
       <button name="/"  onClick={buttonClick}>/</button>
        <button name="*"  onClick={buttonClick}>*</button>
        
        
        <button name="7"  onClick={buttonClick}>7</button>
           <button name="8"  onClick={buttonClick}>8</button>
           <button name="9"  onClick={buttonClick}>9</button>
           <button name="-"  onClick={buttonClick}>-</button>
          
          
          <button name="4"  onClick={buttonClick}>4</button>
          <button name="5"  onClick={buttonClick}>5</button>
           <button name="6"  onClick={buttonClick}>6</button>
           <button name="+"   onClick={buttonClick}>+</button>
          
          <button name="1"  onClick={buttonClick}>1</button>
          <button name="2"  onClick={buttonClick}>2</button>
          <button name="3"  onClick={buttonClick}>3</button>
           <button id="result" name="="  onClick={resultClick}>=</button>
          
       
        <button name="0"  onClick={buttonClick}>0</button>
        <button name="("  onClick={buttonClick}>(</button>
        <button name=")"  onClick={buttonClick}>)</button>
        </div>     
        
        


      
  
      
</div>

     
    
  );

}

export default App;
