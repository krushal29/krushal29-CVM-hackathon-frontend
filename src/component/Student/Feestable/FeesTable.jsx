// import { jsPDF } from "jspdf";
// import "./FeesTable.css";
// import { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FeesTable = () => {
//   const navigate = useNavigate();
//   const cook = Cookies.get("Token");
//   const student_id = sessionStorage.getItem("user_id");
//   const [feeData,setFeeData]=useState([]);
//   console.log(student_id);

//   console.log(cook);


//   // Function to generate and download PDF
//   const generatePDF = (fee) => {
//     const doc = new jsPDF();
//     doc.setFont("helvetica", "bold");
//     doc.text("Fee Receipt", 80, 20);

//     doc.setFont("helvetica", "normal");
//     doc.text(`Date: ${fee.date}`, 20, 40);
//     doc.text(`Fee Type: ${fee.type}`, 20, 50);
//     doc.text(`Amount Paid: ${fee.amount}`, 20, 60);

//     doc.text("Thank you for your payment!", 20, 80);

//     // Save as PDF
//     doc.save(`Receipt_${fee.date.replace(/ /g, "_")}.pdf`);
//   };

//   useEffect(() => {
//     const data = async () => {
//       const response1 = await axios.get(
//         `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/fees/student/${student_id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${cook}`,
//           },
//         }
//       );
//       console.log("re",response1.data.fees);
//       setFeeData(response1.data.fees);
//     };
//     data();
//   },[]);
//   return (
//     <div className="FeesTable">
//       <div className="fees-container">
//         <h2 className="fees-title">Fees Paid</h2>

//         <table className="fees-table">
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Fee Type</th>
//               <th>Payment Type</th>
//               <th>Amount</th>
//               <th>Receipt</th>
//             </tr>
//           </thead>
//           <tbody>
//             {feeData.map((fee, index) => (
//               <tr key={index}>
//                 <td>{fee.date}</td>
//                 <td>{fee.type}</td>
//                 <td>{fee.payment_type}</td>
//                 <td>{fee.amount}</td>
//                 <td>
//                   {fee.status === "ACCEPTED" ? (
//                     <button
//                       className="download-btn"
//                       onClick={() => generatePDF(fee)}
//                     >
//                       Download
//                     </button>
//                   ) : (
//                     <span>{fee.status}</span>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="OpenFeeForm">
//         <button onClick={() => navigate("/StudentFeeUpload")}>
//           Add Fees Detail
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FeesTable;



import  { useEffect, useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import Cookies from 'js-cookie';
import axios from 'axios';
import './FeesTable.css';
import { useNavigate } from 'react-router-dom';

const FeesTable = () => {
  const cook = Cookies.get('Token');
  const student_id = sessionStorage.getItem('user_id');
  const [feeDetail,setDetail]=useState([]);
  const navigate=useNavigate();


  const generatePDF = async (fee) => {
    const receiptHTML = `
      <div style="width: 420mm; height: 594mm; padding: 40mm; font-family: Arial, sans-serif; border: 2px solid #ddd; font-size: 28px;">
        <h1 style="text-align: center; margin-bottom: 10px;">Educational Institute of Technology</h1>
        <p style="text-align: center; font-size: 22px; margin-bottom: 30px;">123, Knowledge Park, New Delhi, India - 110001</p>
        
        <h2 style="text-align: center;">Fee Receipt</h2>
        <div style="margin-bottom: 20px;">
          <p><strong>No:</strong> ${fee.recipt_id}</p>
          <p><strong>Name:</strong>${fee.name}</p>
        </div>
        <div style="margin-bottom: 20px;">
          <p><strong>Branch:</strong>${fee.branch_name}</p>
          <p><strong>Semester:</strong> ${fee.sem_no}</p>
        </div>
        <div style="margin-bottom: 20px;">
          <p><strong>Type of Payment:</strong> Cheque</p>
        </div>
        <table style="width: 100%; border-collapse: collapse; margin-top: 40px;">
          <thead>
            <tr>
              <th style="border: 2px solid #ddd; padding: 20px; background-color: #f8f8f8;">Sl. No.</th>
              <th style="border: 2px solid #ddd; padding: 20px; background-color: #f8f8f8;">Fee Particulars</th>
              <th style="border: 2px solid #ddd; padding: 20px; background-color: #f8f8f8;">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 2px solid #ddd; padding: 20px;">1</td>
              <td style="border: 2px solid #ddd; padding: 20px;">${fee.type}</td>
              <td style="border: 2px solid #ddd; padding: 20px;">${fee.amount}</td>
            </tr>
          </tbody>
        </table>
        <div style="margin-top: 40px; text-align: right; font-weight: bold;">
          <p>Total: ${fee.amount}</p>
        </div>
        <div style="margin-top: 20px;">
          <p><strong>Transaction ID:</strong> ${fee.transaction_id}</p>
        </div>
        
        
      </div>`;

    // Create a temporary div and render HTML inside
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = receiptHTML;
    document.body.appendChild(tempDiv);

    // Convert to canvas and download PDF with optimizations
    const canvas = await html2canvas(tempDiv, { scale: 2, logging: true, useCORS: true }); // Reduced scale for faster conversion
    const imgData = canvas.toDataURL('image/jpeg', 0.95); // Use JPEG for smaller size
    const pdf = new jsPDF('p', 'mm', 'a4');

    // Adjust the size to fill the page properly
    const pdfWidth = pdf.internal.pageSize.getWidth() - 20;
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'JPEG', 10, 10, pdfWidth, pdfHeight);
    pdf.save(`Receipt_${fee.date.replace(/ /g, "_")}.pdf`);

    // Remove temporary div
    document.body.removeChild(tempDiv);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/fees/student/${student_id}`,
          {
            headers: {
              Authorization: `Bearer ${cook}`,
            },
          }
        );
        console.log(response.data);
        setDetail(response.data.fees);



      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [cook, student_id]);


  const generate_data=async(data)=>{
    try {
      const response = await axios.get(
        `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/students/${student_id}`,
        {
          headers: {
            Authorization: `Bearer ${cook}`,
          },
        }
      );


      const response1 = await axios.get(
        `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/batch/${response.data.batch_id}`,
        {
          headers: {
            Authorization: `Bearer ${cook}`,
          },
        }
      );


      const response2 = await axios.get(
        `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/semister/${response.data.current_sem}`,
        {
          headers: {
            Authorization: `Bearer ${cook}`,
          },
        }
      );


      console.log("r1",response.data);
      console.log("r2",response1.data);
      console.log("r3",response2.data);
      let fee_data = {
        "name":response.data.first_name+" "+response.data.last_name,
        "branch_name":response1.data.branch,
        "sem_no":response2.data.sem_no,
        ...data
      }
      await generatePDF(fee_data)
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

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
            {feeDetail.map((fee, index) => (
              <tr key={index}>
                <td>{fee.date}</td>
                <td>{fee.type}</td>
                <td>{fee.payment_type}</td>
                <td>{fee.amount}</td>
                <td>
                  {fee.status === "ACCEPTED" ? (
                    <button
                      className="download-btn"
                      onClick={()=>{
                        generate_data(fee)}}
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