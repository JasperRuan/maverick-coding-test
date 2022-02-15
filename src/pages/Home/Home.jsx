import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import HomeBannerImg from '../../media/img/home_banner.jpg';
import HomePageContent from "../../components/HomePageContent/HomePageContent";

function Home(props) {
    return (
        <div>
            <Banner
                firstLine='a new tropical'
                secondLine='sailing experience'
                thirdLine='sailing adventures in fiji'
                BannerImg={HomeBannerImg}
            />
            <HomePageContent/>
        </div>
    );
}

export default Home;