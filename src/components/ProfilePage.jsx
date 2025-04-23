import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import SessionContext from "../context/SessionContext";
import FavoritesContext from "../context/FavoritesContext";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button, Container } from "react-bootstrap";

const favoriteUI = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};

export default function ProfilePage() {
    const { session } = useContext(SessionContext);
    const { favorites, removeFavorite } = useContext(FavoritesContext);



    return (


        <Container className="text-center ">

            <h2 className="text-center">Bentornato {session?.user.user_metadata.first_name} </h2>
            <DropdownButton id="dropdown-item-button" title="Lista Preferiti">

                {favorites.length === 0 && <p>Non ci sono preferiti al momento...</p>}
                {favorites.map((game) => (
                    <Dropdown.ItemText key={game.id} style={favoriteUI}>
                        <div>
                            <img width={90} height={50} src={game.game_image} alt="" />
                            <p>{game.game_name}</p>
                        </div>
                        <div>
                            <Button onClick={() => removeFavorite(game.game_id)}>
                                <FaTrashAlt />
                            </Button>

                        </div>
                    </Dropdown.ItemText>
                ))}

                {/* <Dropdown.Item as="button" ><FaTrashAlt /></Dropdown.Item> */}



            </DropdownButton>

        </Container>


    );
}



