import {useReducer} from 'react'

interface State {
  count : number;
  error: string|null;
}

interface Action {
  type:"increment" | "decrement"
}


function App() {

function reducer(state:State,action:Action) {

switch(action.type) {
  case "increment":{
    const newCount = state.count + 1
    const hasError = newCount > 5
    return {...state,count:hasError ? state.count : newCount ,error:hasError ? "max number 5" : null };}
  case "decrement":{
    const newCount = state.count - 1
    const hasError = newCount  < 0
    return {...state,count:hasError ? state.count : newCount ,error:hasError ? "min number 0" : null }}
 
  default:
    return state
}
}

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });
    
  return (
    <div>
  <h1>{state.count}</h1>
  {state.error && <h1>Error : {state.error}</h1>} 
      <button onClick={()=> dispatch({type:'increment'})}>Increment</button>
      <button onClick={()=> dispatch({type:'decrement'})}>Decrement</button>
    </div>
  )
}

export default App
