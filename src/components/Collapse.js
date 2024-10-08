import '../styles/main.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

/*
* 3 Props :
* - title : Titre du collapse
* - text : Contenu du collapse
* - customClasses : Ajout de classe pour modifier le CSS au besoin
*/
export default function Collapse({ title, text, customClasses }) {

    // State pour gérer l'ouverture/fermeture du collapse
    const [isOpen, setIsOpen] = useState(true);

    // Fonction pour changer l'état du collapse
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    const getCollapseClass = (isOpen) => {
        if (isOpen) {
            return 'is-closed';
        } else {
            return 'is-open';
        }
    };

    return (
        <div className={`collapse ${customClasses}`}>
            <div className={`collapse__container ${customClasses}`}>
                <div className={`collapse__container--header ${customClasses}`} onClick={toggleCollapse}>
                    <h3 className={`collapse__container--header__title ${customClasses}`}>{title}</h3>
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        className={`collapse__container--header__icon ${getCollapseClass(isOpen)}`}
                    />
                </div>
                <div className={`collapse__container--body ${customClasses} ${getCollapseClass(isOpen)}`}>
                    <div className='collapse__container--body__content'>
                        {text}
                    </div>
                </div>
            </div>
        </div>
    );
}