import React from 'react';
import './Itinerary.css';
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import HomeBannerImg from "../../media/img/home_banner.jpg";
import HomePageContent from "../../components/HomePageContent/HomePageContent";
import Testimonial from "../../components/Testimonial/Testimonial";
import Footer from "../../components/Footer/Footer";

function Itinerary(props) {
    return (
        <div>
            <NavBar/>
            <Banner
                firstLine='Itinerary'
                secondLine='sailing experience'
                thirdLine='sailing adventures in fiji'
                BannerImg={HomeBannerImg}
            />
            <Testimonial/>
            <Footer/>
        </div>
    );
}

export default Itinerary;