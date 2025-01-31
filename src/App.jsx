import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import HomePage from './pages/Homepage/HomePage'
import LoginPage from './pages/loginPage/LoginPage'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </Router>
  )
}

export default App