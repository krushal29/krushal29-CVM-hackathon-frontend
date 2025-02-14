import { jsPDF } from "jspdf";
import "./FeesTable.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FeesTable = () => {
  const navigate = useNavigate();
  const cook = Cookies.get("Token");
  const student_id = sessionStorage.getItem("user_id");
  const [feeData,setFeeData]=useState([]);
  console.log(student_id);

  console.log(cook);


  // Function to generate and download PDF
  const generatePDF = (fee) => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.text("Fee Receipt", 80, 20);

    doc.setFont("helvetica", "normal");
    doc.text(`Date: ${fee.date}`, 20, 40);
    doc.text(`Fee Type: ${fee.type}`, 20, 50);
    doc.text(`Amount Paid: ${fee.amount}`, 20, 60);

    doc.text("Thank you for your payment!", 20, 80);

    // Save as PDF
    doc.save(`Receipt_${fee.date.replace(/ /g, "_")}.pdf`);
  };

  useEffect(() => {
    const data = async () => {
      const response1 = await axios.get(
        `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/fees/student/${student_id}`,
        {
          headers: {
            Authorization: `Bearer ${cook}`,
          },
        }
      );
      console.log("re",response1.data.fees);
      setFeeData(response1.data.fees);
    };
    data();
  },[]);
  return (
    <div className="FeesTable">
      <div className="fees-container">
        <h2 className="fees-title">Fees Paid</h2>

        <table className="fees-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Fee Type</th>
              <th>Payment Type</th>
              <th>Amount</th>
              <th>Receipt</th>
            </tr>
          </thead>
          <tbody>
            {feeData.map((fee, index) => (
              <tr key={index}>
                <td>{fee.date}</td>
                <td>{fee.type}</td>
                <td>{fee.payment_type}</td>
                <td>{fee.amount}</td>
                <td>
                  {fee.status === "ACCEPTED" ? (
                    <button
                      className="download-btn"
                      onClick={() => generatePDF(fee)}
                    >
                      Download
                    </button>
                  ) : (
                    <span>{fee.status}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="OpenFeeForm">
        <button onClick={() => navigate("/StudentFeeUpload")}>
          Add Fees Detail
        </button>
      </div>
    </div>
  );
};

export default FeesTable;
