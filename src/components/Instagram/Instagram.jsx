import React from 'react';
import './Instagram.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import InsImage1 from '../../media/img/instagram/1.jpg';
import InsImage2 from '../../media/img/instagram/2.jpg';
import InsImage3 from '../../media/img/instagram/3.jpg';
import InsImage4 from '../../media/img/instagram/4.jpg';
import InsImage5 from '../../media/img/instagram/5.jpg';
import InsImage6 from '../../media/img/instagram/6.jpg';
import InsImage7 from '../../media/img/instagram/7.jpg';
import InsImage8 from '../../media/img/instagram/8.jpg';
import InsImage9 from '../../media/img/instagram/9.jpg';
import InsImage10 from '../../media/img/instagram/10.jpg';
import InsImage11 from '../../media/img/instagram/11.jpg';
import InsImage12 from '../../media/img/instagram/12.jpg';
import InstagramImage from "../InstagramImage/InstagramImage";


function Instagram(props) {
    return (
        <div className='Instagram'>
            <div className='Instagram--title flex'>
                <div className='Instagram--title--icon flex'>
                    <InstagramIcon/>
                </div>
                <div className='Instagram--title--text'>
                    follow us
                </div>
            </div>
            <div className='Instagram--feed flex'>
                <InstagramImage InsImage={InsImage1}/>
                <InstagramImage InsImage={InsImage2}/>
                <InstagramImage InsImage={InsImage3}/>
                <InstagramImage InsImage={InsImage4}/>
                <InstagramImage InsImage={InsImage5}/>
                <InstagramImage InsImage={InsImage6}/>
                <InstagramImage InsImage={InsImage7}/>
                <InstagramImage InsImage={InsImage8}/>
                <InstagramImage InsImage={InsImage9}/>
                <InstagramImage InsImage={InsImage10}/>
                <InstagramImage InsImage={InsImage11}/>
                <InstagramImage InsImage={InsImage12}/>
            </div>
        </div>
    );
}

export default Instagram;