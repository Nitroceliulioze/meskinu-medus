import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({links, close}) => {
  return (
    <div className='sidebar' onClick={close}>
        <a href="#!"><img className="logo" src={process.env.PUBLIC_URL+"logo.png"}></img></a>
        { links.map(link =>  (                
            <a className="sidebar-link" href="#!" key={link.name}>
                <FontAwesomeIcon icon={link.icon} />
                {link.name}
            </a> 
        ))}
    </div>
  )
}

export default Sidebar