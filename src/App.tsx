import { useState } from 'react'

import Menu from './src/Components/Menu/Menu'
import './App.css'
import Hookexample from './src/Components/Hookform/Hookexample'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div><Hookexample/></div>
  )
}

export default App
