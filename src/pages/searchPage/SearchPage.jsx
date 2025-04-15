import { useSearchParams } from "react-router"
import useFetchSolution from "../../hook/useFetchSolution";
import { useEffect } from "react";
import CardGame from "../../components/CardGame";
import { Col, Container, Row } from "react-bootstrap";

export default function SearchPage() {
    let [searchParams] = useSearchParams();
    const game = searchParams.get("query");

    const initialUrl = `https://api.rawg.io/api/games?key=7b6758499166422891cfd3d32d4054eb&search=${game}`;
    const { data, loading, error, updateUrl } = useFetchSolution(initialUrl);

    useEffect(() => {
        updateUrl(initialUrl);
    }, [initialUrl, updateUrl]);


    return (
        <Container fluid>
            <h1>Risultati per: {game} game</h1>
            {loading && <p>loading...</p>}
            {error && <h1>{error}</h1>}
            <Row>
                {data && data.results.map((game) => (
                    <Col key={game.id} lg={3} md={6} xs={12} className="mt-3">
                        <CardGame game={game} />
                    </Col>))}

            </Row>
        </Container>
    )

}