import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './countary'
import Users from './users'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    alert('Button clicked');
  }
  function handleClick2(){
    alert('2nd button clicked')
  }
  function handleClickEvent(){
    alert('event is occurring here')
  }
  return (
    <>
      <h3>React Core concepts</h3>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>CLICK</button>
      <button onClick={() => {alert('3rd button clicked')}}>click 3</button>
      <ThemeButton onClick={handleClickEvent}></ThemeButton>    
      <button onClick={handleClickEvent}>Touch me</button>
      <Counter></Counter>
      <Users></Users>
    </>
  )
}
// onclick is not working on components but working on elements inside App()

function ThemeButton(){
  const styles = {
    backgroundColor: 'green',

  }
  return(
    <>
      <button style={styles}>click to see event</button>
    </>
  )
}

export default App
