import { products } from '../Helpers/ProductData';
import ProductBox from './ProductBox';

const Produktai = () => {
  return (
    <>{products.map( product => {
        return (
            <ProductBox data={product}/>
            )
        })
    }
        
    </>
    
  )
}

export default Produktai