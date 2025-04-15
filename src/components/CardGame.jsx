import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LazyLoadGameImage from './LazyLoadGameImage';
import { Link } from 'react-router';


export default function CardGame({ game }) {
    const genres = game.genres.map((genre) => genre.name).join(', ');
    const { background_image: image } = game;



    return (
        <Card className="card-game bg-dark text-white mb-3" key={game.id}>
            {/* <Card.Img variant="top" src={game.background_image} alt="game" > */}
            <LazyLoadGameImage image={image} />
            <Card.Body>
                <Card.Title>{game.name}</Card.Title>
                <div className="container">
                    <small>{genres}</small><br />
                    <small>{game.released}</small>
                </div>
                {/* <Button variant="info">
                    <Link className="text-white text-decoration-none" to={`/games/${game.slug}/${game.id}`}>Visita il Gioco</Link>
                </Button> */}
                <Link
                    to={`/games/${game.slug}/${game.id}`}
                    className="btn btn-success text-white text-decoration-none"
                >
                    Visita il Gioco
                </Link>
            </Card.Body>
        </Card>
    );
}


// import { useState, useEffect, useRef } from 'react';
// import Card from 'react-bootstrap/Card';
// import Carousel from 'react-bootstrap/Carousel';
// import { Link } from 'react-router';
// import './CardGame.css';

// function CardGame({ game }) {
//     const {
//         short_screenshots: screenshots = [],
//         background_image,
//         name,
//         released,
//         genres,
//         slug,
//         id
//     } = game;

//     const [isLargeScreen, setIsLargeScreen] = useState(true);
//     const [index, setIndex] = useState(0);
//     const [hovering, setHovering] = useState(false);
//     const carouselRef = useRef(null);

//     const genreList = genres.map((g) => g.name).join(', ');

//     useEffect(() => {
//         const checkScreenSize = () => {
//             setIsLargeScreen(window.innerWidth >= 992); // lg breakpoint in Bootstrap
//         };

//         checkScreenSize();
//         window.addEventListener('resize', checkScreenSize);
//         return () => window.removeEventListener('resize', checkScreenSize);
//     }, []);

//     useEffect(() => {
//         let interval;
//         if (hovering && isLargeScreen) {
//             interval = setInterval(() => {
//                 setIndex((prev) => (prev + 1) % screenshots.length);
//             }, 2000);
//         }
//         return () => clearInterval(interval);
//     }, [hovering, isLargeScreen, screenshots.length]);

//     return (
//         <Card className="card-game bg-dark text-white mb-3" key={id}>
//             <div
//                 onMouseEnter={() => setHovering(true)}
//                 onMouseLeave={() => setHovering(false)}
//                 ref={carouselRef}
//                 className="carousel-hover-wrapper"
//             >
//                 {isLargeScreen ? (
//                     <Carousel
//                         activeIndex={index}
//                         onSelect={(selected) => setIndex(selected)}
//                         indicators={true}
//                         controls={false}
//                         interval={null}
//                         fade={false}
//                     >
//                         {screenshots.map((shot) => (
//                             <Carousel.Item key={shot.id}>
//                                 <img
//                                     className="d-block w-100 card-img"
//                                     src={shot.image}
//                                     alt={`Screenshot ${shot.id}`}
//                                 />
//                             </Carousel.Item>
//                         ))}
//                     </Carousel>
//                 ) : (
//                     <img
//                         src={background_image}
//                         alt={name}
//                         className="d-block w-100 card-img"
//                     />
//                 )}
//             </div>

//             <Card.Body>
//                 <Card.Title>{name}</Card.Title>
//                 <div className="container">
//                     <small>{genreList}</small><br />
//                     <small>{released}</small>
//                 </div>
//                 <Link
//                     to={`/games/${slug}/${id}`}
//                     className="btn btn-info text-white text-decoration-none mt-2"
//                 >
//                     Visita il Gioco
//                 </Link>
//             </Card.Body>
//         </Card>
//     );
// }

// export default CardGame;
