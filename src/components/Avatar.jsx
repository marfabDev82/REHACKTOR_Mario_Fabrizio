// import { useEffect, useState } from 'react'
// import supabase from '../supabase/supabase-client'

// export default function Avatar({ url, size, onUpload }) {
//     const [avatarUrl, setAvatarUrl] = useState(null)
//     const [uploading, setUploading] = useState(false)

//     useEffect(() => {
//         if (url) downloadImage(url)
//     }, [url])

//     const downloadImage = async (path) => {
//         try {
//             const { data, error } = await supabase.storage.from('avatars').download(path)
//             if (error) {
//                 throw error
//             }
//             const url = URL.createObjectURL(data)
//             setAvatarUrl(url)
//         } catch (error) {
//             console.log('Error downloading image: ', error.message)
//         }
//     }

//     const uploadAvatar = async (event) => {
//         try {
//             setUploading(true)

//             if (!event.target.files || event.target.files.length === 0) {
//                 throw new Error('You must select an image to upload.')
//             }

//             const file = event.target.files[0]
//             const fileExt = file.name.split('.').pop()
//             const fileName = `${Math.random()}.${fileExt}`
//             const filePath = `${fileName}`

//             const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)

//             if (uploadError) {
//                 throw uploadError
//             }

//             onUpload(event, filePath)
//         } catch (error) {
//             alert(error.message)
//         } finally {
//             setUploading(false)
//         }
//     }

//     return (
//         <div className='text-center'>
//             {avatarUrl ? (
//                 <img
//                     src={avatarUrl}
//                     alt="Avatar"
//                     className="avatar image"
//                     // style={{ height: size, width: size, boxShadow: "3px 3px 8px black" }}
//                     style={{
//                         height: size,
//                         width: size,
//                         borderRadius: "50%",
//                         objectFit: "cover",
//                         boxShadow: "0 0 8px rgba(0,0,0,0.3)",
//                         marginBottom: "1rem"
//                     }}
//                 />
//             ) : (
//                 <div className="avatar no-image" style={{ height: size, width: size }} />
//             )}
//             <div style={{ width: size }}>
//                 <input
//                     type="file"
//                     id="single"
//                     accept="image/*"
//                     onChange={uploadAvatar}
//                     disabled={uploading}
//                 />
//             </div>
//         </div>
//     )
// }

import { useEffect, useState } from 'react';
import supabase from '../supabase/supabase-client';
import { Button } from 'react-bootstrap';

export default function Avatar({ url, size = 150, onUpload }) {
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        if (url) downloadImage(url);
    }, [url]);

    const downloadImage = async (path) => {
        try {
            const { data, error } = await supabase.storage.from('avatars').download(path);
            if (error) throw error;
            const url = URL.createObjectURL(data);
            setAvatarUrl(url);
        } catch (error) {
            console.log('Errore nel download immagine:', error.message);
        }
    };

    const uploadAvatar = async (event) => {
        try {
            setUploading(true);
            if (!event.target.files || event.target.files.length === 0) {
                throw new Error('Seleziona un\'immagine da caricare.');
            }

            const file = event.target.files[0];
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `${fileName}`;

            const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file);
            if (uploadError) throw uploadError;

            onUpload(event, filePath);
        } catch (error) {
            alert(error.message);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="text-center">
            {/* Avatar */}
            {avatarUrl ? (
                <img
                    src={avatarUrl}
                    alt="Avatar"
                    style={{
                        height: size,
                        width: size,
                        borderRadius: "50%",
                        objectFit: "cover",
                        boxShadow: "0 0 8px rgba(0,0,0,0.3)",
                        marginBottom: "1rem"
                    }}
                />
            ) : (
                <div
                    className="bg-secondary"
                    style={{
                        height: size,
                        width: size,
                        borderRadius: "50%",
                        marginBottom: "1rem",
                        display: "inline-block"
                    }}
                />
            )}


            <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={uploadAvatar}
                disabled={uploading}
                style={{ display: "none" }}
            />


            <div className="d-flex justify-content-center">
                <label htmlFor="fileInput">
                    <Button variant="outline-primary" disabled={uploading}>
                        {uploading ? "Caricamento..." : "Carica Avatar"}
                    </Button>
                </label>
            </div>
        </div>
    );
}
