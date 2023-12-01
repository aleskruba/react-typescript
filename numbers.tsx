import React,{useReducer, useState} from 'react'


type NumbersProps = {
  firstNumber:number | 0,
  lastNumber:number | 0
} 



function App() {
const initialstate :  NumbersProps ={
    firstNumber: 0,
    lastNumber:  0
} 
const [numbers,setNumbers] = useState<NumbersProps>(initialstate)



const handleChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
  setNumbers((prevNumbers)=>({...prevNumbers,[e.target.name]:parseInt(e.target.value)}))
  
}


const resultFunction = (a:number,b:number) =>{
  const result = a + b;
  return result

}

const handleSubmit =(e :React.FormEvent<HTMLFormElement>) =>{
  e.preventDefault();
  console.log(typeof(numbers.firstNumber),numbers.firstNumber)
  console.log(typeof(numbers.lastNumber),numbers.lastNumber)

  resultFunction(numbers.firstNumber!,numbers.lastNumber!)
  

}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='number' 
               placeholder='first number' 
               value={numbers.firstNumber || ''}
               name='firstNumber'
                onChange={handleChange}
  />
        <input type='number'
               placeholder='last number'
               value={numbers.lastNumber || ''}
               name='lastNumber'
               onChange={handleChange}
         />
        <input type='submit' 
                value='increment the two numbers'
              />
       </form>
       <div>
        {`increment of ${numbers.firstNumber} and ${numbers.lastNumber} = ${numbers.firstNumber+numbers.lastNumber}`}
      </div>
    </div>
  )
}

export default App
