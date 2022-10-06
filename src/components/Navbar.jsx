import { useState} from 'react'
import Sidebar from './Sidebar'
import { faList, faBook, faPhone, } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    const links = [
        {
            name: "Produktai",
            path: "/",
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
        <a href="#!"><img className={showSidebar ? "logo hidden" : "logo" } src={process.env.PUBLIC_URL+"logo.png"}></img></a>
        <div className='nav-links'>
            { links.map(link => (
                <a href="#!" key={link.name}>{link.name}</a> 
            ))}
            {/* <a href="#!">Produktai</a>
            <a href="#!">Apie mus</a>
            <a href="#!">Kontaktai</a> */}
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