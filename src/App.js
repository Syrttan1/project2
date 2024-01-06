import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {styled} from 'styled-components'
function App() {





const dispatch = useDispatch()
  const counter = useSelector((state)=>state.counter)

function Inc(params) {
  dispatch({type:'increment'})
}
function Dec(params) {
  dispatch({type:'decrement'})
}
function IncreaseHandler(params) {
  dispatch({type: 'increase', value: 5})
}

  return (
    <>
      <Hn>hello</Hn>
      <FormInput>
        <input type='text' placeholder='Введи имя'/>
        <input type='password' placeholder='Введи пороль'/>
        <button>add</button>
      </FormInput>
      <h1>{counter}</h1>
      <button onClick={Inc}>increment</button>
      <button onClick={Dec}>decrement</button>
      <button onClick={IncreaseHandler}>IncreaseHandler</button>
    </>

  );
}

const Hn = styled.h1`
  color: blue;
  text-align: center;
`
const FormInput = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 10px;

  & input{
    outline: none;
  }
`

export default App;
