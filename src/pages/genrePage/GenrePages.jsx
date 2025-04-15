import { useParams } from "react-router"
import { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardGame from "../../components/CardGame";
import useFetchSolution from "../../hook/useFetchSolution";

export default function GenrePages() {
    const { genre } = useParams();
    const initialUrl = `https://api.rawg.io/api/games?key=7b6758499166422891cfd3d32d4054eb&genres=${genre}&page=1`;
    const { data, loading, error, updateUrl } = useFetchSolution(initialUrl);

    useEffect(() => {
        const newUrl = `https://api.rawg.io/api/games?key=7b6758499166422891cfd3d32d4054eb&genres=${genre}&page=1`;
        updateUrl(newUrl);
    }, [genre, updateUrl]);

    return (
        <Container>

            <h2>Welcome to {genre} page</h2>
            {loading && <p>Loading...</p>}

            {error && <article>{error}</article>}
            <Row>
                {data && data.results.map((game) => (
                    <Col key={game.id} lg={3} md={6} xs={12} className="mt-3">
                        <CardGame game={game} />
                    </Col>
                ))}

            </Row>
        </Container>

    )
}