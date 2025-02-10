import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import HomePage from './pages/Homepage/HomePage'
import LoginPage from './pages/loginPage/LoginPage'
import AchievementsPage from './pages/Student side/Achievements/AchievementsPage'
import AchievementsFormPage from './pages/Student side/Achievements/AchievementsFormPage'
import Eventpage from './pages/Student side/EventsPage/Eventpage'
import NoticePage from './pages/Student side/noticePage/NoticePage'
import Home from './pages/Student side/HomePage/Home'
import SubjectMaterialPage from './pages/Student side/SubjectDetail/SubjectMaterialPage'
import AttendencePage from './pages/Student side/Attendence/AttendencePage'
// import Registration from './pages/Student side/registrationpage/Registration'
// import ParentRagistaration from './pages/parentPage/parentRegistration/ParentRagistaration'
import LeavePage from './pages/Student side/leavepage/LeavePage'
// import TeacherEventForm from './pages/Teacher side/TeacherEventForm/TeacherEventForm'
import TeacherNoticePage from './pages/Teacher side/TeacherNoticePage/TeacherNoticePage'
// import AttendencePageteacher from './pages/Teacher side/Attendence/AttendencePagetecher'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/StudentDashboard' element={<Home/>}/>
        <Route path='/StudentsubjectMaterial' element={<SubjectMaterialPage/>}/>
        <Route path='/StudentAttence' element={<AttendencePage/>}/>
        <Route path='/Achievements' element={<AchievementsPage/>}/>
        <Route path='/Achievements/FormPage' element={<AchievementsFormPage/>}/>
        <Route path='/StudentLeave' element={<LeavePage/>}/>
        <Route path='/StudentEvent' element={<Eventpage/>}/>
        <Route path='/StudentNotice' element={<NoticePage/>}/>
        <Route path='/teacherDashboard' element={<TeacherNoticePage/>}/>
      </Routes>
    </Router>
  )
}

export default App