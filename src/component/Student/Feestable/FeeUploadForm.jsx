import { useState } from "react";
import { Upload } from "lucide-react";
import "../Feestable/FeeUploadForm.css";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FeesReceipt = () => {
  const navigate = useNavigate();
  const student_id = sessionStorage.getItem("user_id");
  const [formData, setFormData] = useState({
    paymentDate: "",
    paymentType: "",
    feeType: "",
    amount: "",
    transactionId:"",
    receiptPhoto: null,
  });

  const handleInputChange = (e) => {
    console.log(e.target);
    
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e) => {
    // setFormData({ ...formData, offerLetter: e.target.files[0] });
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file_upload", file);

    try {
      const response = await axios.post(
        "https://cvmu3-0-iems.onrender.com/v1/files/",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log(response.data);
      setFormData((prev) => ({
        ...prev,
        receiptPhoto: response.data.id,
      }));
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://cvmu3-0-iems.onrender.com/v1/fees",
        JSON.stringify({
          student_id: student_id,
          date: formData.paymentDate,
          type: formData.feeType,
          payment_type: formData.paymentType,
          amount: formData.amount,
          docs_uuid: formData.receiptPhoto,
          transaction_id: formData.transactionId,
        }),
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("Token")}`,
          },
        }
      );
      console.log(response);
      if (response.data) navigate("/StudentFees");
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
          <label className="form-label">transaction id</label>
          <input
            type="text"
            className="form-input"
            name="transactionId"
            value={formData.transactionId}
            onChange={handleInputChange}
          />
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
            <p className="file-name">Selected: {formData.receiptPhoto.name}</p>
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
