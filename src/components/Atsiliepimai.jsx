import { FontAwesomeIcon,  } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

const Atsiliepimai = () => {
  return (
    <div className='container quote'>
        <div className="quotes">
            <p className='quote-text'><FontAwesomeIcon icon={faQuoteLeft}/>Medus labai skanus, ačiū!</p>
            <p className='quote-auth'>--Viktorija</p>
        </div>
        <div className="quotes">
            <p className='quote-text'><FontAwesomeIcon icon={faQuoteLeft}/>Ačiū už nuostabų medutį. Dukrytė, matyt, jau matėt, kaip lūpytes laižė, laukė medučio</p>
            <p className='quote-auth'>--Monika</p>
        </div>
        <div className="quotes">
            <p className='quote-text'><FontAwesomeIcon icon={faQuoteLeft}/>Labai skanus medutis! Ačiū dar kartą</p>
            <p className='quote-auth'>--Jurga</p>
        </div>
    </div>
  )
}

export default Atsiliepimai