import React from 'react';
import './FooterSectionRow.css';
import MaverickLogo from '../../media/img/Maverick Digital logo.png';

function FooterSecondRow(props) {
    return (
        <div className='FooterSecondRow flex'>
            <div className='FooterSecondRow--copyright'>
                &copy;2022 south sea sailing, all rights reserved.
            </div>
            <div className='FooterSecondRow--agency'>
                website by
            </div>
            <div className='FooterSecondRow--maverick_logo'>
                <img src={MaverickLogo} alt='maverick_logo'/>
            </div>
        </div>
    );
}

export default FooterSecondRow;