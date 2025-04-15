// import Dropdown from 'react-bootstrap/Dropdown';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router';
// import useFetchSolution from '../hook/useFetchSolution';
// import { Col, Container, Row } from 'react-bootstrap';

// export default function PlatformsDropdown() {

//     const initialUrl = `https://api.rawg.io/api/platforms?key=7b6758499166422891cfd3d32d4054eb&dates=2024-01-01,2024-12-31`;
//     const { data, loading, error, updateUrl } = useFetchSolution(initialUrl);


//     useEffect(() => {
//         const newUrl = `https://api.rawg.io/api/platforms?key=7b6758499166422891cfd3d32d4054eb&dates=2024-01-01,2024-12-31`;
//         updateUrl(newUrl);
//     }, [updateUrl]);

//     return (
//         <Container className='mt-3'>
//             <Row>
//                 <Col lg={3} md={6} xs={12}>
//                     <Dropdown>
//                         {loading && <p>Loading...</p>}
//                         <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
//                             PLATFORMS
//                         </Dropdown.Toggle>

//                         <Dropdown.Menu className='bg-dark text-white'>
//                             {error && (
//                                 <Dropdown.Item disabled style={{ color: 'red' }}>
//                                     Errore: {error}
//                                 </Dropdown.Item>
//                             )}
//                             {data && data.results.map((platform) => (
//                                 <Dropdown.Item className='bg-dark text-white' as={Link} to={`/games/${platform.id}`} key={platform.id}>
//                                     {platform.name}
//                                 </Dropdown.Item>

//                             ))}
//                         </Dropdown.Menu>
//                     </Dropdown>

//                 </Col>
//             </Row>
//         </Container>
//     );
// }


import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import useFetchSolution from '../hook/useFetchSolution';
import { Col, Container, Row } from 'react-bootstrap';

export default function PlatformsDropdown() {

    const initialUrl = `https://api.rawg.io/api/platforms?key=7b6758499166422891cfd3d32d4054eb&dates=2024-01-01,2024-12-31`;
    const { data, loading, error, updateUrl } = useFetchSolution(initialUrl);


    useEffect(() => {
        const newUrl = `https://api.rawg.io/api/platforms?key=7b6758499166422891cfd3d32d4054eb&dates=2024-01-01,2024-12-31`;
        updateUrl(newUrl);
    }, [updateUrl]);

    return (
        <Container className='mt-3'>
            <Row>
                <Col lg={3} md={6} xs={12}>
                    <Dropdown>
                        {loading && <p>Loading...</p>}
                        <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                            PIATTAFORME
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='bg-dark text-white'>
                            {error && (
                                <Dropdown.Item disabled style={{ color: 'red' }}>
                                    Errore: {error}
                                </Dropdown.Item>
                            )}
                            {data && data.results.map((platform) => (
                                <Dropdown.Item className='bg-dark text-white' as={Link} to={`/platforms/${platform.id}`} state={{ platformName: platform.name }} key={platform.id}>
                                    {platform.name}
                                </Dropdown.Item>

                            ))}
                        </Dropdown.Menu>
                    </Dropdown>

                </Col>
            </Row>
        </Container>
    );
}


