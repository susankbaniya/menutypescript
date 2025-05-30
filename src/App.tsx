import { useState } from 'react'

import Menu from './src/Components/Menu/Menu'
import './App.css'
import Hookexample from './src/Components/Hookform/Hookexample'
import Finalform from './src/Components/FinalForm/Finalform'
import Formikexample from "./src/Components/Formik/Formikexample"
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Menu/>
    <Hookexample/>
    <Formikexample/>
   <Finalform/>
   </div>
  )
}

export default App
