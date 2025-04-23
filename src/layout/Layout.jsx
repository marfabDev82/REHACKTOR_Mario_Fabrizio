import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SideBar from "../components/Sidebar";
import { Container, Row, Col } from 'react-bootstrap';



export default function Layout() {

    return (
        <div className="layout-wrapper bg-dark text-whitebg-dark text-white" data-bs-theme="dark">
            <Navbar />

            <Container fluid className="my-4">
                <Row>

                    <Col xs={12} md={3} lg={2} className="mb-4">
                        <SideBar />
                    </Col>
                    <Col xs={12} md={9} lg={10}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
}