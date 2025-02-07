import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import HomePage from './pages/Homepage/HomePage'
import LoginPage from './pages/loginPage/LoginPage'
import AttendencePage from './pages/Teacher side/Attendence/AttendencePage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/StudentDashboard' element={<AttendencePage/>}/>
      </Routes>
    </Router>
  )
}

export default App