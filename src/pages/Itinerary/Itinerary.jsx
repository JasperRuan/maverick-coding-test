import React from 'react';
import './Itinerary.css';
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import ItineraryBannerImg from "../../media/img/itinerary_banner.jpg";
import Testimonial from "../../components/Testimonial/Testimonial";
import Footer from "../../components/Footer/Footer";
import ItineraryPageContent from "../../components/ItineraryPageContent/ItineraryPageContent";

function Itinerary(props) {
    return (
        <div>
            <NavBar/>
            <Banner
                firstLine='what to expect'
                BannerImg={ItineraryBannerImg}
            />
            <ItineraryPageContent/>
            <Testimonial/>
            <Footer/>
        </div>
    );
}

export default Itinerary;