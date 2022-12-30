import React from "react";
import Footer from "../components/footer";
import Layout from './../components/Layout';
import SpeakerContextProvider from "../context/speaker-context";
import MenuContextProvider from "../context/menu-context";
// import HeaderOne from "../components/header-one";
import Team from "../components/Team";
import PageBanner from './../components/page-banner';

const Organizers = () => {
    return (
        <MenuContextProvider>
            <SpeakerContextProvider>
                    <Layout PageTitle="Organizers">
                        <PageBanner/>
                        <Team/>
                        <Footer/>
                    </Layout>
            </SpeakerContextProvider>
        </MenuContextProvider>
    )
}
export default Organizers