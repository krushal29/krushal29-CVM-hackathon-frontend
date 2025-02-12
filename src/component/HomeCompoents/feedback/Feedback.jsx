import { useEffect, useRef } from "react";
import student from "../../../assets/Ellipse 34.png";
import "../feedback/feedback.css";

const Feedback = () => {
  const cardContainerRef = useRef(null);
  const animationRef = useRef(null); // Ref for requestAnimationFrame ID
  const cardWidth = 380;
  const numberOfCards = 6;
  const visibleCards = 3;

  useEffect(() => {
    const container = cardContainerRef.current;

    if (container) {
      const totalWidth = numberOfCards * cardWidth;
      container.style.width = `${totalWidth}px`;

      let scrollPosition = 0;

      const animate = () => {
        scrollPosition++;

        if (scrollPosition > (numberOfCards - visibleCards) * cardWidth) {
          scrollPosition = 0;
        }

        container.style.transform = `translateX(-${scrollPosition}px)`;
        animationRef.current = requestAnimationFrame(animate); // Store the ID
      };

      animate(); // Start animation initially

      const handleMouseEnter = () => {
        cancelAnimationFrame(animationRef.current); // Stop on hover
      };

      const handleMouseLeave = () => {
        animate(); // Restart on mouse leave
      };

      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        // Cleanup: Remove listeners and stop animation
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        cancelAnimationFrame(animationRef.current);
      };
    }
  }, []); // Empty dependency array ensures this runs only once
  return (
    <div className="feedback">
      <div className="feedback1">
        <div className="feedbackHeading">
          <h1>What students say</h1>
        </div>
        <div className="feedbackp">
          <p>Hear from our students about their learning experience</p>
        </div>
        <div className="feedbackCardContainer">
          <div className="feedbackCardall"ref={cardContainerRef}>
            {[...Array(numberOfCards)].map((_, index) => (
              <div className="feedbackCard" key={index}>
                <div className="feedBackInformation">
                  <p>
                    “Teachings of the great explorer of truth, the master-builder of
                    human happiness. No one rejects, dislikes, or avoids pleasure itself.”
                  </p>
                </div>
                <div className="StudentDetails">
                  <div className="studentlogo">
                    <img src={student} alt="Student" />
                  </div>
                  <div className="studentNameSkill">
                    <h3>Finlay Kirk</h3>
                    <p>Web Developer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
