//Css
import "./ourfaculty.css";
import img from "../../../assets/faculty.png";
import instgram from "../../../assets/instagram.png";
import twitter from "../../../assets/twitter.png";

const obj = [
  {
    img: img,
    name: "Matthew E. McNatt",
    profession: "Professor @George Brown College",
    information:
      "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
    subject: "Engineering physics",
    instagram: "Link",
    twitter: "Link",
  },
  {
    img: img,
    name: "Matthew E. McNatt",
    profession: "Professor @George Brown College",
    information:
      "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
    subject: "Engineering physics",
    instagram: "Link",
    twitter: "Link",
  },
  {
    img: img,
    name: "Matthew E. McNatt",
    profession: "Professor @George Brown College",
    information:
      "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
    subject: "Engineering physics",
    instagram: "Link",
    twitter: "Link",
  },
  {
    img: img,
    name: "Matthew E. McNatt",
    profession: "Professor @George Brown College",
    information:
      "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
    subject: "Engineering physics",
    instagram: "Link",
    twitter: "Link",
  },
  {
    img: img,
    name: "Matthew E. McNatt",
    profession: "Professor @George Brown College",
    information:
      "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
    subject: "Engineering physics",
    instagram: "Link",
    twitter: "Link",
  },

];

const Ourfaculty = () => {
  return (
    <div className="Ourfaculty">
      <div className="Ourfaculty1">
        <div className="OurFacultyH1">
          <h1>Our Faculty</h1>
        </div>
        <div className="OurFacultyp">
          <p>Meet our esteemed faculty members, dedicated to providing quality education and guidance.</p>
        </div>

        <div className="allCardFaculty">
        {obj.map((data,index)=>(

          <div key={index} className="CardFaculty">
            <div className="facultyImg">
              <img src={data.img} alt="" />
            </div>
            <div className="facultyName">
              <h5>{data.name}</h5>
            </div>
            <div className="facultyCollege">
              <p>{data.profession}</p>
            </div>
            <div className="facultyinformation">
              <p>{data.information}</p>
            </div>
            <div className="professionLinks">
              <div className="facultySubject">
                <p>{data.subject}</p>
              </div>
              <div className="socialMedia">
                <img src={instgram} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>
          ))}


        </div>
      </div>
    </div>
  );
};

export default Ourfaculty;
