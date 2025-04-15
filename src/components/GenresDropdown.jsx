import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import useFetchSolution from '../hook/useFetchSolution';
import { Col, Container, Row } from 'react-bootstrap';

export default function GenresDropdown() {

    const initialUrl = `https://api.rawg.io/api/genres?key=7b6758499166422891cfd3d32d4054eb&dates=2024-01-01,2024-12-31`;
    const { data, loading, error, updateUrl } = useFetchSolution(initialUrl);


    useEffect(() => {
        const newUrl = `https://api.rawg.io/api/genres?key=7b6758499166422891cfd3d32d4054eb&dates=2024-01-01,2024-12-31`;
        updateUrl(newUrl);
    }, [updateUrl]);

    return (
        <Container >
            <Row>
                <Col lg={3} md={6} xs={12}>
                    <Dropdown>
                        {loading && <p>Loading...</p>}
                        <Dropdown.Toggle variant="outline-success" id="dropdown-basic" >
                            GENERI
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='bg-dark text-white' aria-expanded="">
                            {error && (
                                <Dropdown.Item disabled style={{ color: 'red' }}>
                                    Errore: {error}
                                </Dropdown.Item>
                            )}
                            {data && data.results.map((genre) => (
                                <Dropdown.Item className='bg-dark text-white' as={Link} to={`/games/${genre.slug}`} key={genre.id}>
                                    <img src={genre.image_background} style={{ width: '24px', height: '24px', marginRight: '10px' }} />   {genre.name}
                                </Dropdown.Item>
                                // <Dropdown.Item key={genre.id}>
                                //     <Link to={`/games/${genre.slug}`}>{genre.name}</Link>
                                // </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>

                </Col>
            </Row>
        </Container>
    );
}




// import Dropdown from 'react-bootstrap/Dropdown';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router';
// import useFetchSolution from '../hook/useFetchSolution';
// import { Col, Container, Row } from 'react-bootstrap';
// import {
//     FaGamepad, FaPuzzlePiece, FaCar, FaFistRaised,
//     FaBook, FaUserFriends
// } from 'react-icons/fa';
// import { GiPistolGun, GiCardPlay, GiFamilyHouse, GiPlatform } from 'react-icons/gi';
// import { MdSportsEsports, MdSchool } from 'react-icons/md';

// const genreIcons = {
//     Action: <FaFistRaised />,
//     Indie: <FaGamepad />,
//     Adventure: <GiPlatform />,
//     RPG: <FaUserFriends />,
//     Strategy: <FaBook />,
//     Shooter: <GiPistolGun />,
//     Casual: <MdSportsEsports />,
//     Simulation: <GiFamilyHouse />,
//     Puzzle: <FaPuzzlePiece />,
//     Arcade: <MdSportsEsports />,
//     Platformer: <GiPlatform />,
//     'Massively Multiplayer': <FaUserFriends />,
//     Racing: <FaCar />,
//     Sports: <MdSportsEsports />,
//     Fighting: <FaFistRaised />,
//     Family: <GiFamilyHouse />,
//     'Board Games': <GiCardPlay />,
//     Card: <GiCardPlay />,
//     Educational: <MdSchool />
// };

// export default function GenresDropdown() {
//     const initialUrl = `https://api.rawg.io/api/genres?key=7b6758499166422891cfd3d32d4054eb&dates=2024-01-01,2024-12-31`;
//     const { data, loading, error, updateUrl } = useFetchSolution(initialUrl);

//     const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsLargeScreen(window.innerWidth >= 768);
//         };
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return (
//         <Container>
//             <Row>
//                 <Col lg={3} md={6} xs={12}>
//                     <Dropdown show={isLargeScreen ? true : undefined}>
//                         {loading && <p>Loading...</p>}
//                         <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
//                             GENRES
//                         </Dropdown.Toggle>

//                         <Dropdown.Menu className="bg-dark text-white">
//                             {error && (
//                                 <Dropdown.Item disabled style={{ color: 'red' }}>
//                                     Errore: {error}
//                                 </Dropdown.Item>
//                             )}
//                             {data && data.results.map((genre) => (
//                                 <Dropdown.Item
//                                     className="bg-dark text-white genre-item"
//                                     as={Link}
//                                     to={`/games/${genre.slug}`}
//                                     key={genre.id}
//                                 >
//                                     <span>{genre.name}</span>
//                                     <span>{genreIcons[genre.name] || <FaGamepad />}</span>
//                                 </Dropdown.Item>
//                             ))}
//                         </Dropdown.Menu>
//                     </Dropdown>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }
