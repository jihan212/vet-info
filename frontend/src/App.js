import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homescreen from './Screens/Homescreen'
import Vetdetailscreen from './Screens/Vetdetailscreen'
import AboutScreen from './Screens/AboutScreen'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homescreen />} />
          <Route path='/details' element={<Vetdetailscreen />} />
          <Route path='/about' element={<AboutScreen />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
