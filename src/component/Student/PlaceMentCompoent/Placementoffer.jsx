import  { useState } from "react";
import "./Placement.css"; // Import CSS file
import { useNavigate } from "react-router-dom";

const PlacementOffers = () => {
    const navigate=useNavigate();
  const offers = [
    { id: 1, company: "Microsoft" },
    { id: 2, company: "Google" },
    { id: 3, company: "Facebook" },
    { id: 4, company: "Amazon" },
    { id: 5, company: "Netflix" },
  ];

  const [statuses, setStatuses] = useState({});

  const handleStatusChange = (id, status) => {
    setStatuses((prev) => ({ ...prev, [id]: status }));
  };

  return (
    <div className="offerDetail">
    <div className="placement-container">
      <h2 className="placement-title">Placement Offers</h2>
      <div className="table-container">
        <table className="placement-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Company</th>
              <th>Preview</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {offers.map((offer) => (
                <tr key={offer.id}>
                <td>{offer.id}</td>
                <td>{offer.company}</td>
                <td>
                  <a href="#" className="view-offer">
                    View offer
                  </a>
                </td>
                <td>
                  <select
                    className="status-dropdown"
                    value={statuses[offer.id] || ""}
                    onChange={(e) => handleStatusChange(offer.id, e.target.value)}
                    >
                    <option value="">Select</option>
                    <option value="accepted">Accepted</option>
                    <option value="declined">Declined</option>
                  </select>
                  {statuses[offer.id] && (
                      <span className={`status-label ${statuses[offer.id]}`}>
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
            </div>
            <div className="offersBtn">
                <button onClick={()=>navigate('/StudentPlacement')}>Placement offers</button>
            </div>
    </div>
  );
};

export default PlacementOffers;
