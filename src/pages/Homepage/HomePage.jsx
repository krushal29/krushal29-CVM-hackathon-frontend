import { useEffect } from "react";
import Feedback from "../../component/HomeCompoents/feedback/Feedback";
import FooterCom from "../../component/HomeCompoents/Footer/FooterCom";
import HeroSection from "../../component/HomeCompoents/heroSection/HeroSection";
import Navbar from "../../component/HomeCompoents/navbar/Navbar";
import Ourfaculty from "../../component/HomeCompoents/ourFaculty/Ourfaculty";
import SchemeCom from "../../component/HomeCompoents/Scheme/SchemeCom";

import axios from "axios";

const HomePage = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/auth/login",
         JSON.stringify({ username: "admin", password: "admin" })
        );
        console.log("Success:", response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SchemeCom />
      <Feedback />
      <Ourfaculty />
      <FooterCom />
    </div>
  );
};

export default HomePage;
