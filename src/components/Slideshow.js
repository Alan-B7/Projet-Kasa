import '../styles/main.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


export default function Carousel({ images }) {

    // State pour gérer l'index de la diapositive actuelle
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = images.length;

    // Image suivante
    const NextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    // Image précédente
    const PreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className='carousel'>

            {/* Si le nombre de slides > 1 alors afficher la flèche "Précédent" avec la fonction associée au click */}
            {totalSlides > 1 && (
                <FontAwesomeIcon 
                    icon={faChevronLeft} 
                    onClick={PreviousSlide} 
                    className='carousel__slide--prev carousel__navigation' 
                />
            )}

            <div className='carousel__images'>
                <img
                    src={images[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    className='carousel__images--active'
                />
            </div>
            
            {/* Si le nombre de slides > 1 alors afficher le compteur de slides et les afficher */}
            {totalSlides > 1 && (
                <div className='carousel__slide--number'>
                    {`${currentSlide + 1}/${totalSlides}`}
                </div>
            )}

            {/* Si le nombre de slides > 1 alors afficher la flèche "Suivant" avec la fonction associée au click */}
            {totalSlides > 1 && (
                <FontAwesomeIcon 
                    icon={faChevronRight} 
                    onClick={NextSlide} 
                    className='carousel__slide--next carousel__navigation' 
                />
            )}
        </div>
    );
}