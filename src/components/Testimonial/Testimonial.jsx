import React from 'react';
import './Testimonial.css';
import LeftArrow from '../../media/img/Left arrow.png';
import RightArrow from '../../media/img/Right arrow.png';
import TestimonialBg from '../../media/img/testimonial_bg.jpg';

function Testimonial(props) {
    return (
        <div className='Testimonial' style={{backgroundImage:`url(${TestimonialBg})`}}>
            <div className='Testimonial--container flex'>
                <div className='Testimonial--arrow_container flex'>
                    <div className='Testimonial--left_arrow Testimonial--arrow'>
                        <img src={LeftArrow} alt='left arrow'/>
                    </div>
                </div>
                <div className='Testimonial--content'>
                    <div className='Testimonial--text'>
                        "We have been in Fiji celebrating our 30th wedding anniversary and sailed with South Sea Sailing with friends and family while we were there, what an amazing experience, beautiful Fiji islands, Villagesand ending up at the most gorgeous beach! To make things even better the food experience and service was 5 star"
                    </div>
                    <div className='Testimonial--name'>
                        Jane Doe
                    </div>
                    <div className='Testimonial--place'>
                        Sydney, Australia
                    </div>
                </div>
                <div className='Testimonial--arrow_container flex'>
                    <div className='Testimonial--right_arrow Testimonial--arrow'>
                        <img src={RightArrow} alt='right arrow'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;