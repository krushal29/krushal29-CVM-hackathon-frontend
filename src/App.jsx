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
import LeavePage from './pages/Student side/leavepage/LeavePage'
import Registration from './pages/Student side/registrationpage/Registration'
import TeacherEventForm from './pages/Teacher side/TeacherEventForm/TeacherEventForm'
import TeacherAllEvent1 from './pages/Teacher side/TeacherEventForm/TeacherAllEvent1'
import TeacherMaterialPage from './pages/Teacher side/TeacherMaterialPage/TeacherMaterialPage'
import TeacherMaterialFormPage from './pages/Teacher side/TeacherMaterialPage/TeacherMaterialFormPage'
import AttendencePageteacher from './pages/Teacher side/Attendence/AttendencePagetecher'
import TeacherNoticePage from './pages/Teacher side/TeacherNoticePage/TeacherNoticePage'
import CreateNotice from './pages/Teacher side/TeacherNoticePage/CreateNotice'
import TeacherLandingPage from './pages/Teacher side/TeacherLandingPage/TeacherLandingPage'
import TeacherLeave from './pages/Teacher side/TeacherLeave/TeacherLeave'


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
        <Route path='/StudentRegistration' element={<Registration/>}/>


        {/* Teacher */}
        <Route path='/TeacherDashboard' element={<TeacherLandingPage/>}/>
        <Route path='/teacherEvent' element={<TeacherAllEvent1/>}/>
        <Route path='/teacherEvent/teacherEventCreate' element={<TeacherEventForm/>}/>
        <Route path='/UploadMaterial' element={<TeacherMaterialPage/>}/>
        <Route path='/UploadMaterial/addMaterial' element={<TeacherMaterialFormPage/>}/>
        <Route path='/TeacherAttendence' element={<AttendencePageteacher/>}/>
        <Route path='/TeacherNotice' element={<TeacherNoticePage/>}/>
        <Route path='/TeacherNotice/TeacherNoticeCreate' element={<CreateNotice/>}/>
        <Route path="/TecherLeaveStatus" element={<TeacherLeave/>}/>
      </Routes>
    </Router>
  )
}

export default App