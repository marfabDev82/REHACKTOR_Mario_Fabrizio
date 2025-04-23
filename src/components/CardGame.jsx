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

