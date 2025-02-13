import { useEffect } from "react";
import Feedback from "../../component/HomeCompoents/feedback/Feedback";
import FooterCom from "../../component/HomeCompoents/Footer/FooterCom";
import HeroSection from "../../component/HomeCompoents/heroSection/HeroSection";
import Navbar from "../../component/HomeCompoents/navbar/Navbar";
import Ourfaculty from "../../component/HomeCompoents/ourFaculty/Ourfaculty";
import SchemeCom from "../../component/HomeCompoents/Scheme/SchemeCom";



const HomePage = () => {
  
  
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <SchemeCom /> */}
      <Feedback />
      <Ourfaculty />
      <FooterCom />
    </div>
  );
};

export default HomePage;
