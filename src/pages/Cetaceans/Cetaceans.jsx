import {useState, useEffect, useRef} from 'react';
import Isotope from 'isotope-layout'; 
import './cetaceans.css';

const Cetaceans = () => {
  const isotope = useRef();
  const [cetaceans, setCetaceans] = useState([]);
  const [filterKey, setFilterKey] = useState('*');
  const handleFilterKeyChange = key => () => setFilterKey(key)
  const getCetaceans = () => {
    fetch('../../data/marine_mammals.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setCetaceans([...data.cetaceans.mysticetes, ...data.cetaceans.odontocetes, ...data.cetaceans.pinnipeds]);
      });
  };
  
  useEffect(() => {
    isotope.current = new Isotope('.cetaceans', {
      itemSelector: '.card',
      layoutMode: 'fitRows' 
    }); 

    return () => isotope.current.destroy()
  })

  useEffect(() => {
    filterKey === '*'
      ? isotope.current.arrange({filter: `*`})
      : isotope.current.arrange({filter: `.${filterKey}`})
  }, [filterKey]);

  useEffect(() => {
    getCetaceans();
  }, []);    

  return (
    <section className="section">
      <div className="inner-container">
        <h1 className="section__title">Cetaceos</h1>

        <div className="filters">
          <span className="filter" onClick={handleFilterKeyChange('*')}>All</span>
          <span className="filter" onClick={handleFilterKeyChange('Mysticete')}>Mysticetes</span>
          <span className="filter" onClick={handleFilterKeyChange('Odontocete')}>Odontocetes</span>
          <span className="filter" onClick={handleFilterKeyChange('Pinipede')}>Pinipedes</span>
        </div>


        <div className="cetaceans">
            {
              cetaceans.map(cetacean => {

                const thumbnail = `./assets/species/${cetacean.scientific_name.split(' ').join('_').toLowerCase()}.png`;

                return(
                  <div key={cetacean.id} className={`card ${cetacean.filter[0]}`}>
                    <div className="card__thumbnail">
                      <img src={thumbnail} alt={cetacean.common_name} />
                    </div>
                    <div className="card__body">
                      <p className='common-name'>{cetacean.common_name}</p>
                      <p className='scientific-name'>{cetacean.scientific_name}</p>
                    </div>
                  </div>
                )
              })
            }
        </div>

      </div>
    </section>
  )
}

export default Cetaceans; 