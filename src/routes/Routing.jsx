// import { BrowserRouter, Route, Routes } from "react-router";
// import Layout from "../layout/Layout";
// import HomePage from "../pages/homepage/HomePage";
// import ErrorPage from "../pages/error";
// import GenrePages from "../pages/genrePage/GenrePages";
// import GamePage from "../pages/gamePage/GamePage";
// import SearchPage from "../pages/searchPage/SearchPage";
// import Register from "../pages/register/Register";
// import LoginPage from "../pages/loginPage/LoginPage";
// import AccountPage from "../pages/account/AccountPage";
// import PlatformPages from "../pages/platformPage/PlatformPages";

// export default function Routing() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route element={<Layout />}>
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="*" element={<ErrorPage />} />
//                     <Route path="/games/:genre" element={<GenrePages />} />
//                     <Route path="/games/:platform" element={<PlatformPages />} />
//                     <Route path="/games/:slug/:id" element={<GamePage />} />
//                     <Route path="/search" element={<SearchPage />} />
//                     <Route path="/register" element={<Register />} />
//                     <Route path="/login" element={<LoginPage />} />
//                     <Route path="/account" element={<AccountPage />} />

//                 </Route>
//             </Routes>
//         </BrowserRouter>

//     )
// }

import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../layout/Layout";
import HomePage from "../pages/homepage/HomePage";
import ErrorPage from "../pages/error";
import GenrePages from "../pages/genrePage/GenrePages";
import GamePage from "../pages/gamePage/GamePage";
import SearchPage from "../pages/searchPage/SearchPage";
import Register from "../pages/register/Register";
import LoginPage from "../pages/loginPage/LoginPage";
import AccountPage from "../pages/account/AccountPage";
import PlatformPages from "../pages/platformPage/PlatformPages";

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="/games/:genre" element={<GenrePages />} />
                    <Route path="/platforms/:platform" element={<PlatformPages />} />
                    <Route path="/games/:slug/:id" element={<GamePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/account" element={<AccountPage />} />

                </Route>
            </Routes>
        </BrowserRouter>

    )
}