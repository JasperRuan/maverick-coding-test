import React from 'react';
import './InstagramImage.css';
import InstagramIcon from "@mui/icons-material/Instagram";

function InstagramImage({InsImage}) {
    return (
        <div className='Instagram--feed--image'>
            <img src={InsImage} alt='instagram_image'/>
            <span className='Instagram--feed-icon'>
                <InstagramIcon/>
            </span>
        </div>
    );
}

export default InstagramImage;