// import { useCallback, useEffect, useRef, useState } from "react";
// import supabase from "../supabase/supabase-client";
// import dayjs from "dayjs";
// import relativeTime from 'dayjs/plugin/relativeTime';

// const chatContainer = {

//     marginTop: '5px',
//     padding: '0px 3px',
//     width: '100%',
//     height: '50vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     backgroundColor: '#1b2212',
//     overflowY: 'scroll'
// }

// dayjs.extend(relativeTime);

// export default function RealtimeChat({ data }) {
//     const [messages, setMessages] = useState([]);
//     const [loadingInitial, setLoadingInitial] = useState(false);
//     const [error, setError] = useState("");
//     const messageRef = useRef(null);

//     const scrollSmoothToBottom = () => {
//         if (messageRef.current) {
//             messageRef.current.scrollTop = messageRef.current.scrollHeight;
//         }

//     }

//     const getInitialMessages = useCallback(async () => {
//         setLoadingInitial(true);
//         const { data: messages, error } = await supabase
//             .from("messages")
//             .select()
//             .eq("game_id", data?.id);
//         if (error) {
//             setError(error.message);
//             return;
//         }
//         setLoadingInitial(false);
//         setMessages(messages);
//     }, [data?.id]);

//     useEffect(() => {
//         if (data) {
//             getInitialMessages();
//         }
//         const channel = supabase
//             .channel("messages")
//             .on(
//                 "postgres_changes",
//                 { event: "*", schema: "public", table: "messages" },
//                 () => getInitialMessages()
//             )
//             .subscribe();
//         return () => {
//             if (channel) {
//                 supabase.removeChannel(channel);
//             }
//             channel.unsubscribe();
//         };
//     }, [data, getInitialMessages]);

//     useEffect(() => {
//         scrollSmoothToBottom();
//     }, [messages]);




//     return (
//         <div style={chatContainer} ref={messageRef}>
//             {loadingInitial && <progress></progress>}
//             {error && <article>{error}</article>}
//             {messages &&
//                 messages.map((message) => (
//                     <article key={message.id}>
//                         <p>{message.profile_username}</p>
//                         <small>{message.content}</small>
//                         <p>{dayjs().to(dayjs(message.created_at))}</p>
//                     </article>
//                 ))}
//         </div>
//     )
// }

import { useCallback, useEffect, useRef, useState } from "react";
import supabase from "../supabase/supabase-client";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const chatContainer = {
    marginTop: "5px",
    padding: "0px 3px",
    width: "100%",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#1b2212", // corretto colore
    overflowY: "scroll",
};

export default function RealtimeChat({ data }) {
    const [messages, setMessages] = useState([]);
    const [loadingInitial, setLoadingInitial] = useState(false);
    const [error, setError] = useState("");
    const messageRef = useRef(null);

    const scrollSmoothToBottom = () => {
        if (messageRef.current) {
            messageRef.current.scrollTop = messageRef.current.scrollHeight;
        }
    };

    const getInitialMessages = useCallback(async () => {
        setLoadingInitial(true);
        const { data: messages, error } = await supabase
            .from("messages")
            .select()
            .eq("game_id", data?.id);
        if (error) {
            setError(error.message);
            setLoadingInitial(false); // fix qui
            return;
        }
        setLoadingInitial(false);
        setMessages(messages);
    }, [data?.id]);

    useEffect(() => {
        if (data) {
            getInitialMessages();
        }

        const channel = supabase
            .channel("messages")
            .on(
                "postgres_changes",
                { event: "*", schema: "public", table: "messages" },
                () => getInitialMessages()
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel); // fix: niente .unsubscribe()
        };
    }, [data, getInitialMessages]);

    useEffect(() => {
        scrollSmoothToBottom();
    }, [messages]);

    return (
        <div style={chatContainer} ref={messageRef}>
            {loadingInitial && <progress></progress>}
            {error && <article>{error}</article>}
            {messages.map((message) => (
                <article key={message.id}>
                    <p><strong>{message.profile_username}</strong></p>
                    <small>{message.content}</small>
                    {message.created_at && (
                        <p style={{ fontSize: "0.75rem", color: "#aaa" }}>
                            {dayjs().to(dayjs(message.created_at))}
                        </p>
                    )}
                </article>
            ))}
        </div>
    );
}
