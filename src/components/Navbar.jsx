
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { Link, useNavigate } from 'react-router';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Searchbar from './Searchbar';
// import { useContext, useEffect, useState } from 'react';
// import supabase from '../supabase/supabase-client';
// import SessionContext from '../context/SessionContext';
// import Logo from '../assets/logo/Logo.png';


// export default function AppNavbar() {
//     const expand = 'lg';
//     // const [session, setSession] = useState(null);
//     const navigate = useNavigate();
//     const { session } = useContext(SessionContext);

//     // const getSession = async () => {
//     //     const { data } = await supabase.auth.getSession();
//     //     if (data.session) {

//     //         setSession(data)
//     //     } else {
//     //         setSession(null);
//     //     }

//     // };

//     const signOut = async () => {
//         const { error } = await supabase.auth.signOut()
//         if (error);
//         alert('Signed out')
//         navigate("/");

//     }


//     return (
//         <>
//             {/* <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3"> */}
//             <Navbar key={expand} expand={expand} className="navbar-custom mb-3" data-bs-theme="dark">
//                 <Container fluid >
//                     <Navbar.Brand as={Link} to="/"> <img
//                         src={Logo}
//                         alt="Logo"
//                         height="60"
//                         className="d-inline-block align-top me-2"
//                     /></Navbar.Brand>
//                     <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//                     <Navbar.Offcanvas
//                         id={`offcanvasNavbar-expand-${expand}`}
//                         aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//                         placement="end"
//                     >
//                         <Offcanvas.Header closeButton>
//                             <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                                 Area Personale
//                             </Offcanvas.Title>
//                         </Offcanvas.Header>
//                         <Offcanvas.Body>
//                             <div className='d-flex justify-content-end w-75'>
//                                 <Searchbar />
//                             </div>


//                             <Nav className="justify-content-end flex-grow-1 pe-3">
//                                 {session ? (
//                                     <>

//                                         <NavDropdown
//                                             title="Account"
//                                             id={`offcanvasNavbarDropdown-expand-${expand}`}
//                                         >
//                                             {/* <NavDropdown.Item href="#action4">Profile</NavDropdown.Item> */}
//                                             <NavDropdown.Item as={Link} to="/account" >Profilo</NavDropdown.Item>
//                                             <NavDropdown.Divider />
//                                             <NavDropdown.Item onClick={signOut}>Esci</NavDropdown.Item>
//                                         </NavDropdown>
//                                     </>) : (
//                                     <>
//                                         <Nav.Link as={Link} to="/login">Accedi</Nav.Link>
//                                         <Nav.Link as={Link} to="/register">Registrati</Nav.Link>

//                                     </>
//                                 )}
//                             </Nav>


//                         </Offcanvas.Body>
//                     </Navbar.Offcanvas>
//                 </Container>
//             </Navbar>

//         </>

//     );
// }


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Searchbar from './Searchbar';
import { useContext } from 'react';
import supabase from '../supabase/supabase-client';
import SessionContext from '../context/SessionContext';
import Logo from '../assets/logo/Logo.png';

export default function AppNavbar() {
    const expand = 'lg';
    const navigate = useNavigate();
    const { session } = useContext(SessionContext);

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error(error);
        } else {
            alert('Signed out');
            navigate('/');
        }
    };

    return (
        <>
            <Navbar key={expand} expand={expand} className="navbar-custom mb-3" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={Logo}
                            alt="Logo"
                            height="60"
                            className="d-inline-block align-top me-2"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        className="offcanvas-dark"
                        data-bs-theme="dark"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Area Personale
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>

                            {/* Searchbar mobile (xs) */}
                            <div className="mb-3 d-lg-none">
                                <Searchbar />
                            </div>

                            {/* Searchbar desktop (md, lg) con stile originale */}
                            <div className="d-none d-lg-flex justify-content-end w-75 mb-3">
                                <Searchbar />
                            </div>

                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {session ? (
                                    <NavDropdown
                                        title="Account"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item as={Link} to="/account">
                                            Profilo
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={signOut}>
                                            Esci
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                ) : (
                                    <>
                                        <Nav.Link as={Link} to="/login">Accedi</Nav.Link>
                                        <Nav.Link as={Link} to="/register">Registrati</Nav.Link>
                                    </>
                                )}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}
