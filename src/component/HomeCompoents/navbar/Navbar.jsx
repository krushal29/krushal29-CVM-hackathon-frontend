    //CSS
    import './Navbar.css'


    //Image
    import { useNavigate } from 'react-router-dom'

    const Navbar = () => {
        const navigate=useNavigate();
    return (
        <nav>
            <div className="navBar">
                <div className="navBar1">
                    <div className="navbarLogo">
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