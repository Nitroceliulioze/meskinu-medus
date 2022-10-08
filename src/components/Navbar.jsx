import { useState} from 'react'
import Sidebar from './Sidebar'
import { faList, faBook, faPhone, } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation()
    const [showSidebar, setShowSidebar] = useState(false)
    const links = [
        {
            name: "Produktai",
            path: "/produktai",
            icon: faList
        },
        {
            name: "Apie mus",
            path: "/apiemus",
            icon: faBook
        },
        {
            name: "Kontaktai",
            path: "/kontaktai",
            icon: faPhone
        }
    ]

function closeSidebar() {
    setShowSidebar(false)
}
  return (
    <>
    <div className='navbar container'>
        <Link to="/"><img className={showSidebar ? "logo hidden" : "logo" } src={process.env.PUBLIC_URL+"logo.png"} alt="Logo"/></Link>
        <div className='nav-links'>
            { links.map(link => (
                <Link to={link.path}className={location.pathname == link.path? "active" : ""} key={link.name}>{link.name}</Link> 
            ))}
        </div>
        <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? 'sidebar-btn active' : 'sidebar-btn' }> 
           <div className='bar'></div>
           <div className='bar'></div>
           <div className='bar'></div>
        </div>
    </div>
    {showSidebar && <Sidebar close={closeSidebar} links={links}/>}
    </>
  )
}

export default Navbar