import React from 'react';
import './Banner.css';
import DownArrow from '../../media/img/Down arrow.png';
import PatternBg from '../../media/img/Pattern.png';

function Banner({firstLine,secondLine,thirdLine, BannerImg}) {
    return (
        <div className='Banner grid-container flex' style={{backgroundImage:`url(${PatternBg}), url(${BannerImg})`}}>
            <div className="Banner--text">
                <div className="Banner--text--first_line">
                    {firstLine}
                </div>
                <div className="Banner--text--second_line">
                    {secondLine}
                </div>
                <div className="Banner--text--third_line">
                    {thirdLine}
                </div>
            </div>
            <div className='down_arrow'>
                <img src={DownArrow}/>
            </div>
        </div>
    );
}

export default Banner;