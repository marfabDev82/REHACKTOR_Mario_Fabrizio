// import { useContext, useState } from "react"
// import SessionContext from "../context/SessionContext"
// import supabase from "../supabase/supabase-client";
// import { Button, Form } from "react-bootstrap";
// import RealtimeChat from "./RealtimeChat";

// export default function Chatbox({ data }) {
//     const { session } = useContext(SessionContext);
//     // const [message, setMessage] = useState("");

//     const handleMessageSubmit = async (event) => {
//         event.preventDefault();

//         const inputMessage = event.currentTarget;
//         const { message } = Object.fromEntries(new FormData(inputMessage))

//         if (typeof message === "string" && message.trim().length !== 0) {
//             const { error } = await supabase
//                 .from("messages")
//                 .insert([
//                     {
//                         profile_id: session?.user.id,
//                         profile_username: session.user.user_metadata.username,
//                         game_id: data.id,
//                         content: message,
//                     },
//                 ])
//                 .select();
//             if (error) {
//                 console.log(error);

//             } else {
//                 inputMessage.reset();
//                 // setMessage("");
//             }
//         }
//     }

//     return (
//         <>
//             <h4>Gamers chat</h4>
//             <div>
//                 <RealtimeChat data={data} />
//             </div>
//             <div>
//                 <Form className="mainContent" onSubmit={handleMessageSubmit}>
//                     <Form.Group className="mb-3">
//                         <Form.Control type="text" placeholder="chat..." name="message" />
//                     </Form.Group>

//                     <Button variant="primary" type="submit" >
//                         Invia
//                     </Button>
//                 </Form>
//             </div>
//         </>

//     )
// }

import { useContext, useState } from "react"
import SessionContext from "../context/SessionContext"
import supabase from "../supabase/supabase-client";
import { Button, Form } from "react-bootstrap";
import RealtimeChat from "./RealtimeChat";
import LoginRequiredModal from "./LoginRequiredModal";

export default function Chatbox({ data }) {
    const { session } = useContext(SessionContext);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleMessageSubmit = async (event) => {
        event.preventDefault();

        if (!session) {
            setShowLoginModal(true);
            return;
        }

        const inputMessage = event.currentTarget;
        const { message } = Object.fromEntries(new FormData(inputMessage));

        if (typeof message === "string" && message.trim().length !== 0) {
            const { error } = await supabase
                .from("messages")
                .insert([
                    {
                        profile_id: session.user.id,
                        profile_username: session.user.user_metadata.username,
                        game_id: data.id,
                        content: message,
                    },
                ])
                .select();
            if (error) {
                console.log(error);
            } else {
                inputMessage.reset();
            }
        }
    }

    return (
        <>
            <h4>Gamers chat</h4>
            <div>
                <RealtimeChat data={data} />
            </div>

            <div>
                <Form className="mainContent" onSubmit={handleMessageSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="chat..."
                            name="message"
                            disabled={!session}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Invia
                    </Button>
                </Form>
            </div>

            <LoginRequiredModal show={showLoginModal} onHide={() => setShowLoginModal(false)} />

        </>
    );
}
