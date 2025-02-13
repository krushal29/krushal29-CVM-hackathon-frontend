import { useEffect, useState } from "react";
import "./Placement.css"; // Import CSS file
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const PlacementOffers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const student_id = sessionStorage.getItem("user_id");
  const cook = Cookies.get("Token");

  const [offers, setoffers] = useState([]);

  const [statuses, setStatuses] = useState({});

  const handleStatusChange = async (id, status) => {
    setStatuses((prev) => ({ ...prev, [id]: status }));
    console.log(id);
    console.log(cook);

    const response1 = await axios.post(
      `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/placements/status/${id}`,
      JSON.stringify({
        status: status,
      }),
      {
        headers: {
          Authorization: `Bearer ${cook}`,
        },
      }
    );
    console.log("reso1", response1);
  };

  const data = async () => {
    const resopse1 = await axios.get(
      `https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/placements/student/${student_id}`,
      {
        headers: {
          Authorization: `Bearer ${cook}`,
        },
      }
    );
    console.log("reso", resopse1);
    setoffers(resopse1.data.placements);
  };
  useEffect(() => {
    data();
  }, [statuses, offers]);

  return (
    <div className="offerDetail">
      <div className="placement-container">
        <h2 className="placement-title">Placement Offers</h2>
        <div className="table-container">
          <table className="placement-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Preview</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer) => (
                <tr key={offer.id}>
                  <td>{offer.company_name}</td>
                  <td>
                    <a
                      href={`https://humble-spork-g6vw4qjw5wqfv7px-8000.app.github.dev/v1/files/${offers.letter_uid}`}
                      className="view-offer"
                    >
                      View offer
                    </a>
                  </td>
                  <td>
                    {offer.status === "offered" ? (
                      <select style={{width:"30%"}}
                        className="status-dropdown"
                        value={statuses[offers.id] || ""}
                        onChange={(e) =>
                          handleStatusChange(offer.id, e.target.value)
                        }
                      >
                        <option value="">Select</option>
                        <option value="accepted">Accepted</option>
                        <option value="rejected">Declined</option>
                      </select>
                    ) : (
                      <span>{offer.status}</span>
                    )}

                    {statuses[offer.id] && (
                      <span
                        className={`status-label ${statuses[offer.id]}`}
                      ></span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {location.pathname != "/Placement" && (
        <div className="offersBtn">
          <button onClick={() => navigate("/StudentPlacement")}>
            Placement offers
          </button>
        </div>
      )}
    </div>
  );
};

export default PlacementOffers;
