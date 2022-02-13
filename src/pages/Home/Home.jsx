import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import HomeBannerImg from '../../media/img/home_banner.jpg';

function Home(props) {
    return (
        <div>

            <Banner
                firstLine='a new tropical'
                secondLine='sailing experience'
                thirdLine='sailing adventures in fiji'
                BannerImg={HomeBannerImg}
            />
        </div>
    );
}

export default Home;