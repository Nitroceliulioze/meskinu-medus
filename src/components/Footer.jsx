import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"; 

const Footer = () => {
  return (
    <>
    <div className='footer container'>
        <div className='footer-section'>
            <p className='title'>Meskinumedus.com</p>
            <p><a href="#!"><img className="logo" src={process.env.PUBLIC_URL+"logo.png"}></img></a></p>
        </div>
        <div className='footer-section'>
            <p className='title'>Sekite naujienas</p>
            <p><a className="social" href="https://www.facebook.com/meskinumedus"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></p>
            <p><a className="social" href="https://www.instagram.com/meskinumedus/"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></p>
        </div>
        <div className='footer-section'>
            <p className='title'>Susisiekite su mumis</p>
            <p>+370 606 00 222</p>
            <p>
                <a className="email" href="mailto:meskinumedus@gmail.com?subject=Medus&body=Sveiki, noriu medaus">meskinumedus@gmail.com</a>
            </p>
        </div>
        
    </div>
    <div>
        <p className="copy">Sukūrė Diana Žukauskienė &copy; 2022 | Visos teisės saugomos</p>
    </div>
    </>    
  )
}

export default Footer