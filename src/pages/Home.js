import React from 'react'
import Layout from '../components/Layout.js';
import SliderOne from '../components/slider-one.js';
import AboutTheme from '../components/about-theme.js';
import AboutTed from '../components/about-ted.js';
import PreviousSpeaker from '../components/previous-speakers.js';
import GoogleMap from '../components/google-map.js';
import Footer from '../components/footer.js';
import MenuContextProvider from '../context/menu-context';
import SpeakerContextProvider from '../context/speaker-context.js';
import HeaderOne from '../components/header-one.js';
import Speakers from '../components/speakers.js';
import Reasons from './../components/reasons';
import Partners from './../components/partners';


function Home() {
  return (

    <MenuContextProvider>
      <SpeakerContextProvider>
          <Layout PageTitle="Home">
            <HeaderOne/>
            <SliderOne/>
            <AboutTheme/>
            <AboutTed/>
            <Speakers/>
            <PreviousSpeaker/>
            <Reasons extraClassName="ready_2"/>
            <Partners/>
            <GoogleMap extraClass="contact-page" />
            <Footer />
          </Layout>
        </SpeakerContextProvider>
      </MenuContextProvider>
  );
}

export default Home;
