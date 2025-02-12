//css
import '../heroSection/HeroSection.css'

import heroSection from '../../../assets/HeroSection-removebg-preview.png'

const HeroSection = () => {
  return (
    <div className="HeroSection">
        <div className="heroSection1">
          <div className="heroSectionFirstSide">
            <div className="heroSectionHeading">
                <h1>The <span>Smart</span> Choice For <span>Future</span> </h1>
            </div>
            <div className="heroSectionP">
                <p>Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the...</p>
            </div>
          </div>
          <div className="heroSecionImg">
            <img src={heroSection} alt="" />
          </div>
        </div>
    </div>
  )
}

export default HeroSection