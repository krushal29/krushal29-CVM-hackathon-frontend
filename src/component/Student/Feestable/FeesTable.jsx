import { jsPDF } from "jspdf";
import "./FeesTable.css";
import { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const FeesTable = () => {
  const cook = Cookies.get("Token");
  const student_id=sessionStorage.getItem("user_id");
  console.log(student_id);
  
  console.log(cook);

  const feesData = [
    { date: "May 7, 2022", type: "Tuition Fee", amount: "65000" },
    { date: "Apr 1, 2022", type: "Exam Fee", amount: "1500" },
    { date: "Mar 1, 2022", type: "Books", amount: "$75" },
    { date: "Feb 1, 2022", type: "Lunch", amount: "$50" },
    { date: "Jan 1, 2022", type: "Books", amount: "$100" },
  ];

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
      console.log(response1);
      
    };
    data();
  });
  return (
    <div className="FeesTable">
      <div className="fees-container">
        <h2 className="fees-title">Fees Paid</h2>

        <table className="fees-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Fee Type</th>
              <th>Amount</th>
              <th>Receipt</th>
            </tr>
          </thead>
          <tbody>
            {feesData.map((fee, index) => (
              <tr key={index}>
                <td>{fee.date}</td>
                <td>{fee.type}</td>
                <td>{fee.amount}</td>
                <td>
                  <button
                    className="download-btn"
                    onClick={() => generatePDF(fee)}
                  >
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeesTable;
