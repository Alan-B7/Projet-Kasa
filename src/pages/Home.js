import '../styles/main.css';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import housingData from '../datas/logements.json';
import plage from '../assets/plage.jpg';

/**
* Page d'accueil
* 
* Utilisation des props de ./Banner.js
*/
export default function home() {
    return (
        <main>
            <Banner
                imageUrl={plage}
                marginTop='60px' 
                marginBottom='40px'
                >
                <h1 className='banner__title'>Chez vous,<br className='break__line' /> partout et ailleurs</h1>
            </Banner>

            <div className='home__gallery'>
                {/* Parcours de des données pour afficher les logements */}
                {housingData.map((housing) => (
                    <Link to={`/logement/${housing.id}`} key={housing.id}>
                    </Link>
                ))}
            </div>
        </main>
    )
}