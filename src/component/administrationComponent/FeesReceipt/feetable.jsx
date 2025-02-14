import React, { useState } from 'react';
import './PaymentVerification.css';

const PaymentVerification = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const columnNames = {
    enrollmentNo: 'Enrollment No.',
    date: 'Date',
    paymentType: 'Payment Type',
    feeType: 'Fee Type',
    view: 'View Receipt',
    actions: 'Verify'
  };

  const payments = [
    {
      enrollmentNo: 'EN2023001',
      date: '01/01/2023',
      paymentType: 'UPI',
      feeType: 'Tuition Fee',
      status: 'Pending',
      receiptImage: '/api/placeholder/400/320'
    },
    {
      enrollmentNo: 'EN2023002',
      date: '01/02/2023',
      paymentType: 'NEFT',
      feeType: 'Exam Fee',
      status: 'Pending',
      receiptImage: '/api/placeholder/400/320'
    },
    {
      enrollmentNo: 'EN2023003',
      date: '01/03/2023',
      paymentType: 'Cheque',
      feeType: 'Card Fee',
      status: 'Pending',
      receiptImage: '/api/placeholder/400/320'
    },
    {
      enrollmentNo: 'EN2023004',
      date: '01/04/2023',
      paymentType: 'RTGs',
      feeType: 'Tuition Fee',
      status: 'Pending',
      receiptImage: '/api/placeholder/400/320'
    },
    {
      enrollmentNo: 'EN2023005',
      date: '01/05/2023',
      paymentType: 'UPI',
      feeType: 'Exam Fee',
      status: 'Pending',
      receiptImage: '/api/placeholder/400/320'
    }
  ];

  const handleVerification = (enrollmentNo, action) => {
    console.log(`Payment ${enrollmentNo} ${action}`);
  };

  const handleViewReceipt = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  return (
    <div className="payment-verification-container">
      <h2 className="table-title">Verify Receipt</h2>
      <div className="table-wrapper">
        <table className="payment-table">
          <thead>
            <tr>
              {Object.values(columnNames).map((columnName) => (
                <th key={columnName}>{columnName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.enrollmentNo}>
                <td>{payment.enrollmentNo}</td>
                <td>{payment.date}</td>
                <td>{payment.paymentType}</td>
                <td>{payment.feeType}</td>
                <td>
                  <button
                    className="view-button"
                    onClick={() => handleViewReceipt(payment.receiptImage)}
                  >
                    View Receipt
                  </button>
                </td>
                <td>
                  <select
                    className="verification-select"
                    onChange={(e) => handleVerification(payment.enrollmentNo, e.target.value)}
                    defaultValue=""
                  >
                    <option value="" disabled>Select Action</option>
                    <option value="accept">Accept</option>
                    <option value="decline">Decline</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <img src={selectedImage} alt="Receipt" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentVerification;