import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const CounsellorDetail = () => {
  const teacher_id = localStorage.getItem("batch_counsellorId");
  const cook = Cookies.get("Token");


  const [teacher,setTeacher]=useState([]);


  useEffect(() => {
    const data = async () => {
      const resopse1 = await axios.get(
        `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/staff/${teacher_id}`,
        {
          headers: {
            Authorization: `Bearer ${cook}`,
          },
        }
      );
      console.log("teacher",resopse1);
      setTeacher(resopse1.data);
    };
    data();
    
  },[]);

  return (
    <div className="CounsellorDetail">
      <div className="CounsellorDetail1">
        <div className="CounsellorDetailh2">
          <h2>Counsellor</h2>
        </div>
        <div className="CounsellorName">
          <h4>{teacher.first_name} {teacher.last_name}</h4>
        </div>
        <div className="CounsellorPhoneNumber">
          <p>Mobile No. : {teacher.contact_no}</p>
        </div>
        <div className="CounsellorBranch">
          <p>Email : {teacher.email_id} </p>
        </div>
      </div>
    </div>
  );
};

export default CounsellorDetail;
