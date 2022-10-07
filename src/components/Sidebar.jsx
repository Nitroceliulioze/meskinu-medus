import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Sidebar = ({links, close}) => {
  return (
    <div className='sidebar' onClick={close}>
        <Link to="/"><img className="logo" src={process.env.PUBLIC_URL+"logo.png"}></img></Link>
        { links.map(link =>  (                
            <Link to={link.path} className="sidebar-link"  key={link.name}>
                <FontAwesomeIcon icon={link.icon} />
                {link.name}
            </Link> 
        ))}
    </div>
  )
}

export default Sidebar