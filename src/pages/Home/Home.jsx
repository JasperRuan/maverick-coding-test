import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import HomeBannerImg from '../../media/img/home_banner.jpg';
import HomePageContent from "../../components/HomePageContent/HomePageContent";
import Testimonial from "../../components/Testimonial/Testimonial";
import Footer from "../../components/Footer/Footer";



function Home(props) {
    return (
        <div>
            <NavBar/>
            <Banner
                firstLine='a new tropical'
                secondLine='sailing experience'
                thirdLine='sailing adventures in fiji'
                BannerImg={HomeBannerImg}
            />
            <HomePageContent/>
            <Testimonial/>
            <Footer/>
        </div>
    );
}

export default Home;