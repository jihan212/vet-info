import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homescreen from './Screens/Homescreen'
import Vetdetailscreen from './Screens/Vetdetailscreen'
import AboutScreen from './Screens/AboutScreen'
import APIscreen from './Screens/APIscreen'
import VetaddScreen from './Screens/VetaddScreen'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homescreen />} />
          <Route path='/details' element={<Vetdetailscreen />} />
          <Route path='/about' element={<AboutScreen />} />
          <Route path='/API' element={<APIscreen />} />
          <Route path='/admin/vetadd' element={<VetaddScreen />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
