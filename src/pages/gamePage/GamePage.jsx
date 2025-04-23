
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import LazyLoadGameImage from "../../components/LazyLoadGameImage";
import useFetchSolution from "../../hook/useFetchSolution";
import { Container, Row, Col } from "react-bootstrap";
import ToggleFavorite from "../../components/ToggleFavorite";
import Chatbox from "../../components/Chatbox";
import ReadMoreArea from "@foxeian/react-read-more";


export default function GamePage() {
    const { id } = useParams();
    const initialUrl = `https://api.rawg.io/api/games/${id}?key=7b6758499166422891cfd3d32d4054eb`;
    const { data, loading, error, updateUrl } = useFetchSolution(initialUrl);

    useEffect(() => {
        const newUrl = `https://api.rawg.io/api/games/${id}?key=7b6758499166422891cfd3d32d4054eb`;
        updateUrl(newUrl);
    }, [id, updateUrl]);

    return (
        <Container fluid className="mt-4">
            {loading && <p>Loading...</p>}
            {error && <h1>{error}</h1>}

            {data && (
                <Row className="align-items-center">
                    <Col md={6} className="mb-3">
                        <div>
                            <LazyLoadGameImage image={data.background_image} />
                        </div>

                    </Col>
                    <Col md={6}>
                        <p className="text-muted">{data.released}</p>
                        <h1>{data.name}</h1>
                        <ToggleFavorite data={data} />
                        <p><strong>Rating:</strong> {data.rating}</p>
                        <h5 className="mt-3">About:</h5>
                        <ReadMoreArea lettersLimit={350} expandLabel="Leggi di più"
                            collapseLabel="Riduci">
                            {data.description_raw}
                        </ReadMoreArea>
                    </Col>
                    <Col>
                        <Chatbox data={data && data} />
                    </Col>

                </Row>
            )}
        </Container>
    );
}
