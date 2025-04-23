import { Container, Row, Col } from "react-bootstrap";
import GenresDropdown from "./GenresDropdown";
import PlatformsDropdown from "./PlatformsDropdown";

export default function SideBar() {
    return (
        <Container fluid className="mb-4 mt-3 text-center ">
            <Row>
                <Col lg={12} md={12} xs={12} className="mb-3 ms-0">
                    <GenresDropdown />
                </Col>
                <Col lg={12} md={12} xs={12} className="mb-1 ms-0">
                    <PlatformsDropdown />
                </Col>
            </Row>
        </Container>
    );
}