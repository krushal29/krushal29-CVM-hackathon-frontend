import { useEffect, useState } from "react";
import "./RegistrationAccount.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const RegistrationForm = () => {
  const { aadhar, marksheet } = useParams();
  const navigate=useNavigate();
  console.log("id", aadhar, marksheet);
  const cook = Cookies.get("Token");

  
  const [marksheet1, setmarksheet] = useState({
    program_name: "",
    score: "",
    student_name: "",
    year_of_apperance: "",
  });
  
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "",
    currentAddress: "",
    permanentAddress: "",
    mobileNumber: "(123) 456-7890",
    fatherName: "John Doe",
    motherName: "Jane Doe",
    fatherPhone: "(123) 456-7890",
    motherPhone: "(123) 456-7890",
    nextBatch: "",
    branch: "",
  });
  const [branch, setBranch] = useState([]);

  console.log(FormData.nextBatch);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("all data",formData);
    
    const result = await axios.post(
      `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/students`,JSON.stringify({
          first_name:formData.firstName,
          last_name:formData.lastName,
          gender:'m',
          contact_no:formData.mobileNumber,
          email_id:formData.nextBatch,
          batch_id:formData.branch
      }),
      
      {
        headers: {
          Authorization: `Bearer ${cook}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(formData);
    console.log("result",result);

    if(result.data){
      alert("Student Created With EnrollnmentId This:"+result.data.enrollment_id);
      navigate('/adminDashboard');
    }
    

  };

  const formatDate = (dob) => {
    const [day, month, year] = dob.split("/");
    return `${year}-${month}-${day}`; // Converts to "YYYY-MM-DD"
  };
  useEffect(() => {
    const data = async () => {
      const subject = await axios.get(
        `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/batch/25`,
        {
          headers: {
            Authorization: `Bearer ${cook}`,
            
          },
        }
      );
      console.log("subject", subject.data.batches);
      setBranch(subject.data.batches);
      const resopose = await axios.get(
        `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/students/extract_aadhaar/${aadhar}`,
        {
          headers: {
            Authorization: `Bearer ${cook}`,
          },
        }
      );
      console.log(resopose);

      setFormData((prevState) => ({
        ...prevState,
        firstName: resopose.data.first_name,
        lastName: resopose.data.last_name,
        dateOfBirth: formatDate(resopose.data.dob),
        permanentAddress: resopose.data.address,
        mobileNumber: resopose.data.aadhaar_no,
        fatherName: resopose.data.father_name,
      }));

      const resopose1 = await axios.get(
        `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/students/extract_result/${marksheet}`,
        {
          headers: {
            Authorization: `Bearer ${cook}`,
          },
        }
      );
      console.log(resopose1);

      setmarksheet((prevState) => ({
        ...prevState,
        program_name: resopose1.data.program_name,
        score: resopose1.data.score,
        student_name: resopose1.data.student_name,
        year_of_apperance: resopose1.data.year_of_apperance,
      }));
    };

    data();
  }, []);

  console.log(marksheet1);

  return (
    <div className="form-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Register for an account</h2>

        <div className="form-row">
          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
            />
          </div>

          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="input-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Current Address</label>
          <textarea
            name="currentAddress"
            value={formData.currentAddress}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <div className="input-group">
          <label>Permanent Address</label>
          <textarea
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <div className="input-group">
          <label>Mobile Number</label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="(123) 456-7890"
          />
        </div>

        <div className="form-row">
          <div className="input-group">
            <label>Father's Name</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Mother's Name</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label>Father's Phone Number</label>
            <input
              type="tel"
              name="fatherPhone"
              value={formData.fatherPhone}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Mother's Phone Number</label>
            <input
              type="tel"
              name="motherPhone"
              value={formData.motherPhone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="nextBatch"
            value={formData.nextBatch}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Branch</label>
          <select name="branch" value={formData.branch} onChange={handleChange}>
            <option value="">Select Branch</option>
            {branch.map((item, index) => (
              
              <option key={index} value={item.id}>
                {item.branch} {/* Ensure this is the correct field name */}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="next-button" >
          Next
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
