import Button from "./Button"
import { Link } from "react-router-dom";

const ProductBox = (props) => {
  return (
    <div className='product-wrapper'>
        <div className='produktas'>
            <div className='box'>
                <div className='produkto-img'>
                    <img src={props.data.img} alt=""/>
                </div>
                <div className='prudikto-pavdinimas'>{props.data.title}</div>
                <div className='produkto-aprasymas'>{props.data.subtitle}</div>
                <div className='produkto-kaina'>{props.data.price}</div>
                <Link to="/kontaktai"><Button data={"Užsisakyti"}/></Link>
            </div>            
        </div>
    </div>
    
  )
}

export default ProductBox