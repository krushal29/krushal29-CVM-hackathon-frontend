import { useState } from "react";
import "./FeesReceipt.css";
import Cookies from "js-cookie";
import axios from "axios";

const FeesReceipt = () => {
  const cook = Cookies.get("Token");

  const [formData, setFormData] = useState({
    enrollmentNo: "",
    paymentDate: "",
    paymentType: "",
    feeType: "",
    amount: "",
  });
  console.log(formData);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    const response = await axios.post(
      "https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/fees",
      JSON.stringify({
        enrollment_id:formData.enrollmentNo,
        date:formData.paymentDate,
        payment_type:formData.paymentType,
        type:formData.feeType,
        transaction_id:"NA",
        amount:formData.amount

      }),
      { headers: { Authorization: `Bearer ${cook}`,  "Content-Type": "application/json"} }
    );

    console.log(response);
    
  };

  return (
    <div className="FeesReceipt">
      <div className="FeesReceipt1">
        <form className="payment-form" onSubmit={handleSubmit}>
          <h3 className="form-title">Submit Payment Detail</h3>

          <div className="form-group">
            <label className="form-label">Enrollment No.</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter enrollment number"
              name="enrollmentNo"
              value={formData.enrollmentNo}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Date of Payment</label>
            <input
              type="date"
              className="form-input"
              placeholder="MM/DD/YYYY"
              name="paymentDate"
              value={formData.paymentDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Type of Payment</label>
            <select
              className="select-input"
              name="paymentType"
              value={formData.paymentType}
              onChange={handleInputChange}
            >
              <option value="upi">UPI</option>
              <option value="cheque">Cheque</option>
              <option value="neft">NEFT</option>
              <option value="rtgs">RTGs</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Type of Fee</label>
            <select
              className="select-input"
              name="feeType"
              value={formData.feeType}
              onChange={handleInputChange}
            >
              <option value="">Select Type of Fee</option>
              <option value="tution_fees">Tuition Fee</option>
              <option value="exam_fees">Exam Fee</option>
              <option value="card_fees">Card Fee</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Amount</label>
            <input
              type="number"
              className="form-input"
              placeholder="Enter amount"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeesReceipt;
