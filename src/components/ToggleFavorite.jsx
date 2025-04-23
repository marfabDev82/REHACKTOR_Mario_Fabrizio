
// import { useContext } from "react";
// import { Button } from "react-bootstrap";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import FavoritesContext from "../context/FavoritesContext";

// export default function ToggleFavorite({ data }) {
//     const { favorites, addToFavorites, removeFavorite } = useContext(FavoritesContext);
//     const isFavorite = () => favorites.some((fav) => +fav.game_id === data?.id);


//     return (
//         <div>
//             {isFavorite() ? (
//                 <Button variant="outline-info" onClick={() => removeFavorite(data.id)}>
//                     Rimuovi <FaHeart />
//                 </Button>
//             ) : (
//                 <Button variant="outline-danger" onClick={() => addToFavorites(data)}>
//                     Aggiungi <FaRegHeart />
//                 </Button>
//             )}
//         </div>
//     );
// }

import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import FavoritesContext from "../context/FavoritesContext";
import SessionContext from "../context/SessionContext";
import LoginRequiredModal from "./LoginRequiredModal";

export default function ToggleFavorite({ data }) {
    const { favorites, addToFavorites, removeFavorite } = useContext(FavoritesContext);
    const { session } = useContext(SessionContext);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const isFavorite = () => favorites.some((fav) => +fav.game_id === data?.id);

    const handleAdd = () => {
        if (!session?.user) {
            setShowLoginModal(true);
            return;
        }
        addToFavorites(data);
    };

    const handleRemove = () => {
        if (!session?.user) {
            setShowLoginModal(true);
            return;
        }
        removeFavorite(data.id);
    };

    return (
        <>
            <div>
                {isFavorite() ? (
                    <Button variant="outline-info" onClick={handleRemove}>
                        Rimuovi <FaHeart />
                    </Button>
                ) : (
                    <Button variant="outline-danger" onClick={handleAdd}>
                        Aggiungi <FaRegHeart />
                    </Button>
                )}
            </div>


            <LoginRequiredModal
                show={showLoginModal}
                onHide={() => setShowLoginModal(false)}
            />
        </>
    );
}
