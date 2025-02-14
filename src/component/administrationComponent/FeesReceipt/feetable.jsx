import { useState } from "react";
import "./feestable.css";
import axios from "axios";
import Cookies from "js-cookie";

const Feetable = () => {
  // const [showModal, setShowModal] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);
  // console.log(showModal, selectedImage);

  const student_id = sessionStorage.getItem("user_id");
  const cook = Cookies.get("Token");
  const [payment, setPayments] = useState({});

  const [action, setAction] = useState();
  const [allDataPayment, setAllDataPayment] = useState([]);
  // Move payments to state

  // Handle verification update
  const handleVerification = async (enrollmentNo, action) => {
    console.log(action, enrollmentNo);
    try {
      const response = await axios.patch(
        `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/fees/${enrollmentNo}/status`,
        JSON.stringify({
          accepted: action == "accept" ? true : false,
        }),
        {
          headers: {
            Authorization: `Bearer ${cook}`,
          },
        }
      );

      try {
        const response = await axios.get(
          `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/fees/pending`,
          {
            headers: {
              Authorization: `Bearer ${cook}`,
            },
          }
        );

        console.log(response.data.fees);
        setAllDataPayment(response.data.fees);
      } catch (error) {
        console.error("Upload failed", error);
      }

    
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  useState(() => {
    const data = async () => {
      try {
        const response = await axios.get(
          `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/fees/pending`,
          {
            headers: {
              Authorization: `Bearer ${cook}`,
            },
          }
        );

        console.log(response.data.fees);
        setAllDataPayment(response.data.fees);
      } catch (error) {
        console.error("Upload failed", error);
      }
    };
    data();
  }, []);

  return (
    <div className="payment-verification-container">
      <h2 className="table-title">Verify Receipt</h2>
      <div className="table-wrapper">
        <table className="payment-table">
          <thead>
            <tr>
              <th>Enrollment No.</th>
              <th>Date</th>
              <th>Payment Type</th>
              <th>Fee Type</th>
              <th>Amount</th>
              <th>View Document</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allDataPayment.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.enrollment_id}</td>
                <td>{payment.date}</td>
                <td>{payment.payment_type}</td>
                <td>{payment.type}</td>
                <td>{payment.amount}</td>
                <td>
                  <a
                    href={`https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/files/${payment.docs_uuid}`}
                  >
                    <button className="view-button">View Receipt</button>
                  </a>
                </td>
                <td>
                  <select
                    className="verification-select"
                    onChange={(e) =>
                      handleVerification(payment.id, e.target.value)
                    }
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Action
                    </option>
                    <option value="accept">Accept</option>
                    <option value="decline">Decline</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              ×
            </button>
            <img src={selectedImage} alt="Receipt" className="modal-image" />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Feetable;
