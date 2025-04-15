// import GenresDropdown from "./GenresDropdown";
// import PlatformsDropdown from "./PlatformsDropdown";

// export default function SideBar() {

//     return (
//         <div >
//             <GenresDropdown />
//             <PlatformsDropdown />
//         </div>

//     )

// }

import { Container, Row, Col } from "react-bootstrap";
import GenresDropdown from "./GenresDropdown";
import PlatformsDropdown from "./PlatformsDropdown";

export default function SideBar() {
    return (
        <Container fluid className="mb-4">
            <Row>
                <Col lg={12} md={12} xs={12} className="mb-3">
                    <GenresDropdown />
                </Col>
                <Col lg={12} md={12} xs={12}>
                    <PlatformsDropdown />
                </Col>
            </Row>
        </Container>
    );
}