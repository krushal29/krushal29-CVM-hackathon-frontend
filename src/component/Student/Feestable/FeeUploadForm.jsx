import { useState } from "react";
import { Upload } from "lucide-react";
import "./FeesReceipt.css";
import Cookies from "js-cookie";
import axios from "axios";

const FeesReceipt = () => {
  const [formData, setFormData] = useState({
    paymentDate: "",
    paymentType: "",
    feeType: "",
    amount: "",
    receiptPhoto: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, receiptPhoto: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    
    formDataToSend.append('date', formData.paymentDate);
    formDataToSend.append('payment_type', formData.paymentType);
    formDataToSend.append('type', formData.feeType);
    formDataToSend.append('amount', formData.amount);
    formDataToSend.append('receipt_photo', formData.receiptPhoto);
    
    try {
      const response = await axios.post(
        "https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/fees",
        formDataToSend,
        { 
          headers: { 
            Authorization: `Bearer ${Cookies.get("Token")}`,
            "Content-Type": "multipart/form-data"
          } 
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="FeesReceipt">
      <form className="payment-form" onSubmit={handleSubmit}>
        <h3 className="form-title">Submit Payment Detail</h3>

        <div className="form-group">
          <label className="form-label">Date of Payment</label>
          <input
            type="date"
            className="form-input"
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
            <option value="">Select Payment Type</option>
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

        <div className="form-group">
          <label className="form-label">Upload Receipt</label>
          <div className="upload-container">
            <label className="upload-label">
              <Upload className="upload-icon" />
              <span className="upload-text">Select a file</span>
              <input
                type="file"
                className="file-input"
                name="receiptPhoto"
                onChange={handleFileChange}
                accept="image/*"
              />
            </label>
          </div>
          {formData.receiptPhoto && (
            <p className="file-name">
              Selected: {formData.receiptPhoto.name}
            </p>
          )}
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeesReceipt;