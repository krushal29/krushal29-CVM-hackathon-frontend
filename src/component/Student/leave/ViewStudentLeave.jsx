import { useEffect, useState } from "react";
import "./StudentLeave.css";
  
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";


const ViewStudentLeave = () => {
  const cook = Cookies.get("Token");
  const student_id = sessionStorage.getItem("user_id");
  console.log(student_id);
  const [obj, setObj] = useState([]);

  console.log(cook);
  // const [Year, setYear] = useState("All Year");
  // const [AddFilter, setaddFilter] = useState("All");
  // const [filterData, setFilterData] = useState(obj);
  const navigate = useNavigate();
  // console.log(Year,AddFilter);

  // const handleFilterData = () => {
  //   let filtered = obj;

  //   if (Year !== "All Year") {
  //     filtered = filtered.filter((data) => {
  //       const appYear = `20${data.from_date.split("/")[2]}`;
  //       return Year.includes(appYear);
  //     });
  //   }

  //   if (AddFilter !== "All") {
  //     filtered = filtered.filter((data) => data.status === AddFilter);
  //   }

  //   setFilterData(filtered);
  // };

  // console.log(filterData);

  useEffect(() => {
    const data = async () => {
      const response1 = await axios.get(
        `https://cvmu3-0-iems.onrender.com/v1/leave/student/${student_id}`,
        {
          headers: {
            Authorization: `Bearer ${cook}`,
          },
        }
      );
      console.log("res", response1.data.leaves);
      setObj(response1.data.leaves);
    };
    data();
  },[]);
  return (
    // <div className="PastApplication1">
    //   <div className="PastApplication">
    //     <div className="pastApplicationh3">
    //       <h3>Past Application</h3>
    //     </div>
    //     <div className="filterApplication">
    //       <div className="filterYear">
    //         <label htmlFor="year">Select Year:</label>
    //         <select id="year" onChange={(e) => setYear(e.target.value)}>
    //           <option value="All Year">All Year</option>
    //           <option value="2022">2022-23</option>
    //           <option value="2023">2023-24</option>
    //           <option value="2024">2024-25</option>
    //         </select>
    //       </div>
    //       <div className="AddFilter">
    //         <label htmlFor="status">Add Filter</label>
    //         <select id="status" onChange={(e) => setaddFilter(e.target.value)}>
    //           <option value="All">All</option>
    //           <option value="Pending">Pending</option>
    //           <option value="Accepted">Accepted</option>
    //         </select>
    //       </div>
    //       <div className="SearchFilter">
    //         <button>
    //           <span>Search</span>
    //           <CiSearch />
    //         </button>
    //       </div>
    //     </div>

    //     <table className="StatusDetail">
    //       <thead>
    //         <tr>
    //           <th>Form Date</th>
    //           <th>To Date</th>
    //           <th>Reason</th>
    //           <th>View Document</th>
    //           <th>Status</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {obj.map((value, index) => (
    //           <tr key={index}>
    //             <td>{value.from_date}</td>
    //             <td>{value.to_date}</td>
    //             <td>{value.reason}</td>
    //             <td><a href={`https://cvmu3-0-iems.onrender.com/v1/files/${value.document_id}`}><button>View</button></a></td>
    //             <td>
    //               {value.Status == "Accepted" ? "✔️ Accepted" : "🕐 Pending"}
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    //   <div className="ViewPastApplication">
    //     <button onClick={() => navigate("/viewLeaveApplication")}>
    //       Past Application
    //     </button>
    //   </div>
    // </div>



    <div className='past-application-wrapper'>
      <div className="past-application-container">
        <div className="application-header">
          <h3>Leave Applications</h3>
        </div>
        <div className="centerTable">
          <div className="table-container">
            <table className="leave-table">
              <thead>
                <tr>
                  <th>From</th>
                  <th>To</th>
                  <th>Reason</th>
                  <th>View Leave Document</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {obj.map((value, index) => (
                  <tr key={index}>
                    <td>{value.from_date}</td>
                    <td>{value.to_date}</td>
                    <td>{value.reason}</td>
                    <td><a href={`https://cvmu3-0-iems.onrender.com/v1/files/${value.document_id}`}><button>View</button></a></td>
                    <td>
                      <span className={`status-badge ${value.status.toLowerCase()}`}>
                        {value.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="apply-leave-button">
          <button onClick={() => navigate('/viewLeaveApplication')}>Apply Leave</button>
        </div>
      </div>
    </div>
  );
};

export default ViewStudentLeave;
