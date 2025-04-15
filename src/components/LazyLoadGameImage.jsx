import { LazyLoadImage } from 'react-lazy-load-image-component'
import "react-lazy-load-image-component/src/effects/blur.css";


export default function LazyLoadGameImage({ image }) {
    return (
        <LazyLoadImage
            alt="game image"
            effect="blur"
            wrapperProps={{
                style: { transitionDelay: "0.5s" },

            }}
            style={{
                width: '100%',
                height: '180px',
                objectFit: 'cover',
                borderTopLeftRadius: '0.375rem',
                borderTopRightRadius: '0.375rem',
            }}
            src={image} />

    )

};