import { useState } from 'react';
import "./StudentLeave.css";

import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';


const obj = [
    {
      ApplicationDate: "08/02/22",
      AcceptedDate: "08/02/22",
      Days: "6",
      Reason: "Fever",
      Status: "Pending",
    },
    {
      ApplicationDate: "08/02/23",
      AcceptedDate: "08/02/23",
      Days: "11",
      Reason: "Fever",
      Status: "Pending",
    },
    {
      ApplicationDate: "08/02/24",
      AcceptedDate: "08/02/24",
      Days: "6",
      Reason: "Fever",
      Status: "Pending",
    },
    {
      ApplicationDate: "08/02/22",
      AcceptedDate: "08/02/22",
      Days: "6",
      Reason: "Fever",
      Status: "Accepted",
    },
    {
      ApplicationDate: "08/02/22",
      AcceptedDate: "08/02/22",
      Days: "6",
      Reason: "Fever",
      Status: "Accepted",
    },
    {
      ApplicationDate: "08/02/22",
      AcceptedDate: "08/02/22",
      Days: "6",
      Reason: "Fever",
      Status: "Accepted",
    },
  ];
const ViewStudentLeave = () => {
     const [Year, setYear] = useState("All Year");
      const [AddFilter, setaddFilter] = useState("All");
      const [filterData, setFilterData] = useState(obj);
      const navigate=useNavigate();
      // console.log(Year,AddFilter);
    
      const handleFilterData = () => {
        let filtered = obj;
    
        if (Year !== "All Year") {
          filtered = filtered.filter((data) => {
            const appYear = `20${data.ApplicationDate.split("/")[2]}`;
            return Year.includes(appYear);
          });
        }
    
        if (AddFilter !== "All") {
          filtered = filtered.filter((data) => data.Status === AddFilter);
        }
    
        setFilterData(filtered);
      };
    
      console.log(filterData);
  return (
    <div className='PastApplication1'>

          <div className="PastApplication">
            <div className="pastApplicationh3">
              <h3>Past Application</h3>
            </div>
            <div className="filterApplication">
              <div className="filterYear">
                <label htmlFor="year">Select Year:</label>
                <select id="year" onChange={(e) => setYear(e.target.value)}>
                  <option value="All Year">All Year</option>
                  <option value="2022">2022-23</option>
                  <option value="2023">2023-24</option>
                  <option value="2024">2024-25</option>
                </select>
              </div>
              <div className="AddFilter">
                <label htmlFor="status">Add Filter</label>
                <select
                  id="status"
                  onChange={(e) => setaddFilter(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Pending">Pending</option>
                  <option value="Accepted">Accepted</option>
                </select>
              </div>
              <div className="SearchFilter">
                <button onClick={handleFilterData}>
                  <span>Search</span>
                  <CiSearch />
                </button>
              </div>
            </div>

            <table className="StatusDetail">
              <thead>
                <tr>
                  <th>Application Date</th>
                  <th>Accepted Date</th>
                  <th>Days</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filterData.map((value, index) => (
                  <tr key={index}>
                    <td>{value.ApplicationDate}</td>
                    <td>{value.AcceptedDate}</td>
                    <td>{value.Days}</td>
                    <td>{value.Reason}</td>
                    <td>
                      {value.Status == "Accepted"
                        ? "✔️ Accepted"
                        : "🕐 Pending"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="ViewPastApplication">
          <button onClick={()=>navigate('/viewLeaveApplication')}>Past Application</button>
        </div>

    </div>
  )
}

export default ViewStudentLeave