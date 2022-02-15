import React from 'react';
import './HomePageContent.css';
import LongBg from '../../media/img/home_page_long_bg.jpg';
import Pattern from '../../media/img/Pattern.png';
import FijiImage from '../../media/img/home_fiji_img.jpg';
import WhiteBg from '../../media/img/white_bg.jpg';
import Pattern2 from '../../media/img/Pattern2.jpg';

function HomePageContent(props) {
    return (
        <div className='HomePageContent'>
            <div className='HomePageContent--Experience_section grid-container'
                 style={{backgroundImage:`url(${Pattern}),url(${LongBg})`}}
            >
                <div className='HomePageContent--Experience_firstline'>
                    exploring the
                </div>
                <div className='HomePageContent--Experience_secondline'>
                    mamanucas in style
                </div>
                <div className='HomePageContent--Experience_thirdline'>
                    Day trips and experiences in the Mamanuca Islands
                </div>
                <div className='HomePageContent--Experience_paragraph'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className='HomePageContent--Experience_btn long_btn'>
                    discover more
                </div>
                <div className='HomePageContent--Experience--second_title uppercase box-right-side'>
                    island hoping experience
                </div>
                <div className='HomePageContent--Experience--second_subtitle box-right-side'>
                    On our 78ft Catamaran
                </div>
                <div className='HomePageContent--Experience--second_paragraph box-right-side'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
                </div>
                <div className='HomePageContent--Experience-btn_group flex box-right-side'>
                    <div className='HomePageContent--Experience_btn1 long_btn'>
                        the experience
                    </div>
                    <div className='HomePageContent--Experience_btn2 HomePageContent--Experience_book_btn long_btn '>
                        book now
                    </div>
                </div>
            </div>
            <div className='HomePageContent--fiji_section flex' style={{backgroundImage:`url(${Pattern2})`}}>
                <div className="HomePageContent--fiji--left_container">
                    <div className='HomePageContent--fiji--title uppercase'>
                        the best fiji has to offer
                    </div>
                    <div className="HomePageContent--fiji--subtitle">
                        Make memories to cherish
                    </div>
                    <div className="HomePageContent--fiji--paragraph">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
                    </div>
                    <div className='HomePageContent--fiji-btn_group flex'>
                        <div className='HomePageContent--fiji_btn1 long_btn'>
                            the experience
                        </div>
                        <div className='HomePageContent--fiji_btn2 HomePageContent--Experience_book_btn long_btn '>
                            book now
                        </div>
                    </div>
                </div>
                <div className="HomePageContent--fiji--right_container">
                    <img src={FijiImage} alt='fiji_image'/>
                </div>

            </div>
        </div>
    );
}

export default HomePageContent;