import React from 'react';
import './ItineraryPageContent.css';
import Image1 from '../../media/img/itinerary_p1.jpg';
import Image2 from '../../media/img/itinerary_p2.jpg';
import Count1 from '../../media/img/1.jpg';
import Count2 from '../../media/img/2.png';
import Count3 from '../../media/img/3.png';
import Count4 from '../../media/img/4.png';
import Count5 from '../../media/img/5.png';
import Count6 from '../../media/img/6.png';
import Count7 from '../../media/img/7.png';
import Count8 from '../../media/img/8.png';

function ItineraryPageContent(props) {
    return (
        <div className='ItineraryPageContent'>
            <div className='Itinerary--title--section'>
                <div className="Itinerary--title--line_one uppercase">
                    lorem ipsum
                </div>
                <div className="Itinerary--title--line_two uppercase">
                    dolor deomoa frec
                </div>
                <div className="Itinerary--title--line_three">
                    Lorem Ipsum is just simply dummy text
                </div>
                <div className="Itinerary--title--paragraph">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
            <div className='Itinerary--section flex'>
                <div className='Itinerary--text-section'>
                    <div className='Itinerary--text_block'>
                        <div className="Itinerary--text--title_block flex">
                            <div className="Itinerary--text--title_count">
                                <img src={Count1} alt='count'/>
                            </div>
                            <div className="Itinerary--text--title_text">
                                <div className="Itinerary--text--title_text_title uppercase">
                                    lorem ipsum dolor
                                </div>
                                <div className="Itinerary--text--title_text_subtitle">
                                    Starting 9am-10am
                                </div>
                            </div>
                        </div>
                        <div className="Itinerary--text--paragraph_block">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </div>
                    </div>
                    <div className='Itinerary--text_block'>
                        <div className="Itinerary--text--title_block flex">
                            <div className="Itinerary--text--title_count">
                                <img src={Count2} alt='count'/>
                            </div>
                            <div className="Itinerary--text--title_text">
                                <div className="Itinerary--text--title_text_title uppercase">
                                    lorem ipsum dolor
                                </div>
                                <div className="Itinerary--text--title_text_subtitle">
                                    Starting 9am-10am
                                </div>
                            </div>
                        </div>
                        <div className="Itinerary--text--paragraph_block">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </div>
                    </div>
                    <div className='Itinerary--text_block'>
                        <div className="Itinerary--text--title_block flex">
                            <div className="Itinerary--text--title_count">
                                <img src={Count3} alt='count'/>
                            </div>
                            <div className="Itinerary--text--title_text">
                                <div className="Itinerary--text--title_text_title uppercase">
                                    lorem ipsum dolor
                                </div>
                                <div className="Itinerary--text--title_text_subtitle">
                                    Starting 9am-10am
                                </div>
                            </div>
                        </div>
                        <div className="Itinerary--text--paragraph_block">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </div>
                    </div>
                    <div className='Itinerary--text_block'>
                        <div className="Itinerary--text--title_block flex">
                            <div className="Itinerary--text--title_count">
                                <img src={Count4} alt='count'/>
                            </div>
                            <div className="Itinerary--text--title_text">
                                <div className="Itinerary--text--title_text_title uppercase">
                                    lorem ipsum dolor
                                </div>
                                <div className="Itinerary--text--title_text_subtitle">
                                    Starting 9am-10am
                                </div>
                            </div>
                        </div>
                        <div className="Itinerary--text--paragraph_block">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </div>
                    </div>
                </div>
                <div className='Itinerary--image-section'>
                    <img src={Image1} alt='promotion image'/>
                </div>
            </div>
            <div className='Itinerary--section reverse_in_mobile flex'>
                <div className='Itinerary--image-section'>
                    <img src={Image2} alt='promotion image'/>
                </div>
                <div className='Itinerary--text-section'>
                    <div className='Itinerary--text_block'>
                        <div className="Itinerary--text--title_block flex">
                            <div className="Itinerary--text--title_count">
                                <img src={Count5} alt='count'/>
                            </div>
                            <div className="Itinerary--text--title_text">
                                <div className="Itinerary--text--title_text_title uppercase">
                                    lorem ipsum dolor
                                </div>
                                <div className="Itinerary--text--title_text_subtitle">
                                    Starting 9am-10am
                                </div>
                            </div>
                        </div>
                        <div className="Itinerary--text--paragraph_block">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </div>
                    </div>
                    <div className='Itinerary--text_block'>
                        <div className="Itinerary--text--title_block flex">
                            <div className="Itinerary--text--title_count">
                                <img src={Count6} alt='count'/>
                            </div>
                            <div className="Itinerary--text--title_text">
                                <div className="Itinerary--text--title_text_title uppercase">
                                    lorem ipsum dolor
                                </div>
                                <div className="Itinerary--text--title_text_subtitle">
                                    Starting 9am-10am
                                </div>
                            </div>
                        </div>
                        <div className="Itinerary--text--paragraph_block">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </div>
                    </div>
                    <div className='Itinerary--text_block'>
                        <div className="Itinerary--text--title_block flex">
                            <div className="Itinerary--text--title_count">
                                <img src={Count7} alt='count'/>
                            </div>
                            <div className="Itinerary--text--title_text">
                                <div className="Itinerary--text--title_text_title uppercase">
                                    lorem ipsum dolor
                                </div>
                                <div className="Itinerary--text--title_text_subtitle">
                                    Starting 9am-10am
                                </div>
                            </div>
                        </div>
                        <div className="Itinerary--text--paragraph_block">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </div>
                    </div>
                    <div className='Itinerary--text_block'>
                        <div className="Itinerary--text--title_block flex">
                            <div className="Itinerary--text--title_count">
                                <img src={Count8} alt='count'/>
                            </div>
                            <div className="Itinerary--text--title_text">
                                <div className="Itinerary--text--title_text_title uppercase">
                                    lorem ipsum dolor
                                </div>
                                <div className="Itinerary--text--title_text_subtitle">
                                    Starting 9am-10am
                                </div>
                            </div>
                        </div>
                        <div className="Itinerary--text--paragraph_block">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </div>
                    </div>
                </div>
            </div>
            <div className='Itinerary--btn--section flex'>
                <div className='Itinerary_booknow_btn long_btn uppercase'>
                    book now
                </div>
            </div>
        </div>
    );
}

export default ItineraryPageContent;