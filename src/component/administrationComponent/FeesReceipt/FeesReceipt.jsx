import { useState } from "react";
import "./FeesReceipt.css";

const FeesReceipt = () => {
  const [formData, setFormData] = useState({
    enrollmentNo: "",
    paymentDate: "",
    paymentType: "",
    feeType: "",
    amount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
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
              type="text"
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
              <option value="">Cash, Cheque, DD, Online</option>
              <option value="cash">Cash</option>
              <option value="cheque">Cheque</option>
              <option value="dd">DD</option>
              <option value="online">Online</option>
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
              <option value="tuition">Tuition Fee</option>
              <option value="library">Library Fee</option>
              <option value="hostel">Hostel Fee</option>
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
