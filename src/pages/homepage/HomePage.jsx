import { useState, useEffect } from "react"
import config from "../../utils/config";
import CardGame from "../../components/CardGame";
import { Container, Row, Col } from 'react-bootstrap';
import useFetchSolution from "../../hook/useFetchSolution";


export default function HomePage() {
    const initialUrl = `https://api.rawg.io/api/games?key=7b6758499166422891cfd3d32d4054eb&dates=2024-01-01,2024-12-31&page=1`;

    const { data, loading, error, updateUrl } = useFetchSolution(initialUrl);
    // console.log(data);




    useEffect(() => {
        const newUrl = `https://api.rawg.io/api/games?key=7b6758499166422891cfd3d32d4054eb&dates=2024-01-01,2024-12-31&page=1`;
        updateUrl(newUrl);
    }, [updateUrl]);



    return (

        <Container fluid >
            <h1 className="text-center mb-5">Lista Giochi</h1>
            {loading && <p>Loading...</p>}
            {error && <article>{error}</article>}
            <Row >
                {data && data.results.map((game) => (

                    <Col key={game.id} lg={3} md={6} xs={12} className="mt-3">
                        <CardGame game={game} />
                    </Col>
                ))}
            </Row>
        </Container>


    )
}