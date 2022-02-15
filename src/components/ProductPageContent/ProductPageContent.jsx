import React from 'react';
import './ProductPageContent.css';
import Bg1 from '../../media/img/product_bg1.jpg';
import Bg2 from '../../media/img/product_bg2.jpg';
import Bg3 from '../../media/img/product_bg3.jpg';
import Bg4 from '../../media/img/product_bg4.jpg';
import Pattern from '../../media/img/Pattern.png';

function ProductPageContent(props) {
    return (
        <div className='ProductPageContent'>

            <div className='ProductPageContent--section flex grid-right' style={{backgroundImage:`url(${Pattern}),url(${Bg1})`}}>
                <div>
                    <div className='ProductPageContent--title uppercase'>
                        a unique sailing experience
                    </div>
                    <div className="ProductPageContent--paragraph">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div className='ProductPageContent-btn_group flex'>
                        <div className='ProductPageContent_btn2 long_btn uppercase'>
                            book now
                        </div>
                    </div>
                </div>
            </div>

            <div className='ProductPageContent--section flex grid-left' style={{backgroundImage:`url(${Bg2})`}}>
                <div>
                    <div className='ProductPageContent--title uppercase white-text'>
                        explored the mananucas
                    </div>
                    <div className="ProductPageContent--paragraph white-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div className='ProductPageContent-btn_group flex'>
                        <div className='long_btn'>
                            book now
                        </div>
                        <div className='ProductPageContent_btn2 long_btn uppercase'>
                            the experience
                        </div>
                    </div>
                </div>
            </div>

            <div className='ProductPageContent--section flex grid-right' style={{backgroundImage:`url(${Pattern}),url(${Bg3})`}}>
                <div>
                    <div className='ProductPageContent--title uppercase white-text'>
                        gourmet food & drink
                    </div>
                    <div className='ProductPageContent--subtitle uppercase'>
                        Signature Cocktails
                    </div>
                    <div className="ProductPageContent--paragraph white-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div className='ProductPageContent-btn_group flex'>
                        <div className='ProductPageContent_btn2 long_btn uppercase'>
                            book now
                        </div>
                    </div>
                </div>
            </div>

            <div className='ProductPageContent--section flex grid-left' style={{backgroundImage:`url(${Pattern}),url(${Bg4})`}}>
                <div>
                    <div className='ProductPageContent--title uppercase white-text'>
                        snorkel unspoiled reefs
                    </div>
                    <div className="ProductPageContent--paragraph white-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div className='ProductPageContent-btn_group flex'>
                        <div className='ProductPageContent_btn long_btn uppercase white-text'>
                            book now
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductPageContent;