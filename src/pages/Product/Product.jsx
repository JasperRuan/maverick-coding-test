import React from 'react';
import './Product.css';
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import ProductBannerImg from "../../media/img/product_banner.jpg";
import Testimonial from "../../components/Testimonial/Testimonial";
import Footer from "../../components/Footer/Footer";
import ProductPageContent from "../../components/ProductPageContent/ProductPageContent";

function Product(props) {
    return (
        <div>
            <NavBar/>
            <Banner
                firstLine="fiji's newest"
                secondLine='sailing experience'
                BannerImg={ProductBannerImg}
            />
            <ProductPageContent/>
            <Testimonial/>
            <Footer/>
        </div>

    );
}

export default Product;