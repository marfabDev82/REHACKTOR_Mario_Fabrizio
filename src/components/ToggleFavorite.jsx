
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import FavoritesContext from "../context/FavoritesContext";

export default function ToggleFavorite({ data }) {
    const { favorites, addToFavorites, removeFavorite } = useContext(FavoritesContext);
    // 🔎 Verifica se il gioco è già tra i favoriti
    const isFavorite = () => favorites.some((fav) => +fav.game_id === data?.id);
    // const { session } = useContext(SessionContext);
    // const [favorites, setFavorites] = useState([]);

    // // 🔄 Carica i favoriti all'inizio
    // useEffect(() => {
    //     const fetchFavorites = async () => {
    //         if (!session?.user) return;
    //         const { data, error } = await supabase
    //             .from("favorites")
    //             .select("*")
    //             .eq("user_id", session.user.id);
    //         if (!error) setFavorites(data);
    //     };

    //     fetchFavorites();
    // }, [session]);

    // // 🔎 Verifica se il gioco è già tra i favoriti
    // const isFavorite = () => favorites.some((fav) => +fav.game_id === data.id);

    // const addToFavorites = async (game) => {
    //     if (!session?.user) return;

    //     if (isFavorite()) {
    //         alert("Gioco già nei preferiti!");
    //         return;
    //     }

    //     const { data: newFavorite, error } = await supabase
    //         .from("favorites")
    //         .insert([
    //             {
    //                 user_id: session.user.id,
    //                 game_id: game.id,
    //                 game_name: game.name,
    //                 game_image: game.background_image,
    //             },
    //         ])
    //         .select();

    //     if (error) {
    //         alert("Errore durante l'inserimento nei preferiti");
    //         console.error(error);
    //     } else {
    //         setFavorites((prev) => [...prev, ...newFavorite]);
    //     }
    // };

    // const removeFavorite = async (game) => {
    //     const { error } = await supabase
    //         .from("favorites")
    //         .delete()
    //         .eq("game_id", game.id)
    //         .eq("user_id", session?.user.id)
    //     if (error) {
    //         alert(error);
    //     } else {
    //         setFavorites((prev) => prev.filter(
    //             (el) => el.game_id != game.id && el.user_id !== session?.user.id
    //         )
    //         );
    //     }
    // };

    return (
        <div>
            {isFavorite() ? (
                <Button variant="outline-info" onClick={() => removeFavorite(data.id)}>
                    Rimuovi <FaHeart />
                </Button>
            ) : (
                <Button variant="outline-danger" onClick={() => addToFavorites(data)}>
                    Aggiungi <FaRegHeart />
                </Button>
            )}
        </div>
    );
}