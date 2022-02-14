import React from 'react';
import './FooterFirstRow.css';
import Logo from '../../media/img/South Sea Sailing logo.png';
import FacebookIcon from '../../media/img/Facebook icon.png';
import InsIcon from '../../media/img/Instagram icon.png';
import EmailIcon from '../../media/img/Email icon.png';
import TripadvisorIcon from '../../media/img/Trip Advisor icon.png';

function FooterFirstRow(props) {
    return (
        <div className='FooterFirstRow flex grid-container'>
            <div className='FooterFirstRow--section1'>
                <img src={Logo} alt='logo'/>
            </div>
            <div className='FooterFirstRow--section2'>
                <div className='FooterFirstRow--section_title'>
                    discover
                </div>
                <div className="FooterFirstRow--section_item">
                    experiences
                </div>
                <div className="FooterFirstRow--section_item">
                    the boat
                </div>
                <div className="FooterFirstRow--section_item">
                    the region
                </div>
                <div className="FooterFirstRow--section_item">
                    our crew
                </div>
            </div>
            <div className='FooterFirstRow--section3'>
                <div className='FooterFirstRow--section_title'>
                    information
                </div>
                <div className="FooterFirstRow--section_item">
                    become a member
                </div>
                <div className="FooterFirstRow--section_item">
                    agent portal
                </div>
                <div className="FooterFirstRow--section_item">
                    trade & media
                </div>
                <div className="FooterFirstRow--section_item">
                    store
                </div>
                <div className="FooterFirstRow--section_item">
                    contact
                </div>
            </div>
            <div className='FooterFirstRow--section4'>
                <div className='FooterFirstRow--section_title'>
                    social
                </div>
                <div className='FooterFirstRow--section_social_icons flex'>
                    <div className='FooterFirstRow--section_social_icon'>
                        <img src={FacebookIcon} alt='facebook_icon'/>
                    </div>
                    <div className='FooterFirstRow--section_social_icon'>
                        <img src={InsIcon} alt='instagram_icon'/>
                    </div>
                    <div className='FooterFirstRow--section_social_icon'>
                        <img src={EmailIcon} alt='email_icon'/>
                    </div>
                </div>
            </div>
            <div className='FooterFirstRow--section5'>
                <div className='FooterFirstRow--section5_text'>
                    qui est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                </div>
                <div className='FooterFirstRow--section5_btn btn'>
                    view on maps
                </div>
            </div>
            <div className='FooterFirstRow--section6'>
                <img src={TripadvisorIcon} alt='tripadvisor_icon'/>
            </div>
        </div>
    );
}

export default FooterFirstRow;