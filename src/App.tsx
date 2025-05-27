import { useState } from 'react'

import Menu from './src/Components/Menu/Menu'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div><Menu/></div>
  )
}

export default App
