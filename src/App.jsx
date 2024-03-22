import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from './pages/Home';
import Index from './pages/Index';

function App() {
  const [index, setIndex] =useState(false);

  return (
    <>
    {index === true ? <Index/> : <Home setIndex={setIndex}/>}
    </>
  )
}

export default App
