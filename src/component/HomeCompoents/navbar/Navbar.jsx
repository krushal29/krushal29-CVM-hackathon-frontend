//CSS
import './Navbar.css'


//Image
import logo from "../../../assets/Group.jpg"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate();
  return (
    <nav>
        <div className="navBar">
            <div className="navBar1">
                <div className="navbarLogo">
                    <img src={logo} alt="" />
                    <span>Logo</span>
                </div>
                <div className="navbarDetail">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li className='SignIn' onClick={()=>navigate('/login')}>Sign in</li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

  )
}

export default Navbar