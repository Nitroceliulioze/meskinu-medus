import { images } from '../Helpers/CarouselData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Kontaktai = () => {
  return (
    <div className='contacts container'> 
        <div className='contacts-inner' style={{backgroundImage: `url(${images[1].img})`}}>
            <div className='contact-wrapper'>
                <div className='contact-section'>
                    <p className='title'>Sekite naujienas</p>
                    <p><a className="social" href="https://www.facebook.com/meskinumedus" target="blank"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></p>
                    <p><a className="social" href="https://www.instagram.com/meskinumedus/" target="blank"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></p>
                </div>
                <div className='contact-section'>
                    <p className='title'>Susisiekite su mumis</p>
                    <p><a className="social" href="tel:+370 606 00 222"><FontAwesomeIcon icon={faPhone} /> Paskambinkite dabar</a></p>
                    <p>
                        <a className="social" href="mailto:meskinumedus@gmail.com?subject=Medus&body=Sveiki, noriu medaus"><FontAwesomeIcon icon={faEnvelope} /> Parašykite el. laišką </a>
                    </p>
                </div>      
            </div>            
        </div>
    </div>
  )
}

export default Kontaktai