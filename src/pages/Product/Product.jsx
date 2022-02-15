import React from 'react';
import './Product.css';
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import HomeBannerImg from "../../media/img/home_banner.jpg";
import HomePageContent from "../../components/HomePageContent/HomePageContent";
import Testimonial from "../../components/Testimonial/Testimonial";
import Footer from "../../components/Footer/Footer";
import ProductPageContent from "../../components/ProductPageContent/ProductPageContent";

function Product(props) {
    return (
        <div>
            <NavBar/>
            <Banner
                firstLine='Product Page'
                secondLine='sailing experience'
                thirdLine='sailing adventures in fiji'
                BannerImg={HomeBannerImg}
            />
            <ProductPageContent/>
            <Testimonial/>
            <Footer/>
        </div>

    );
}

export default Product;