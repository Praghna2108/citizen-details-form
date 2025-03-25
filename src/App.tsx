import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Form from './form/Form'
import Table from './form/Table'

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Table/>}/>
        <Route path='/Form' element={<Form/>}/>
      </Routes>
      </BrowserRouter>

  )
}

export default App
