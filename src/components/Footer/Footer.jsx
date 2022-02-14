import React from 'react';
import './Footer.css';
import Instagram from "../Instagram/Instagram";
import FooterFirstRow from "../FooterFirstRow/FooterFirstRow";
import FooterPatternBg from '../../media/img/Pattern.png';
import FooterSecondRow from "../FooterSecondRow/FooterSecondRow";

function Footer(props) {
    return (
        <div className='Footer' style={{backgroundImage:`url(${FooterPatternBg})`}}>
            <Instagram/>
            <FooterFirstRow/>
            <FooterSecondRow/>
        </div>
    );
}

export default Footer;