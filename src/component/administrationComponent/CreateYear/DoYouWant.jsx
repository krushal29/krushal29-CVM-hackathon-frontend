import { useState } from 'react';
import DoYouDonotWant from './DoYouDonotWant';;

const DoYouWant = ({ onClose }) => {
  const [showYearPopup, setShowYearPopup] = useState(false);

  return (
    <>
      <div className="popup-backdrop" onClick={onClose} />
      <div className="confirmation-popup">
        <p className="popup-question">Do you want to create a new year?</p>
        
        <div className="button-group">
          <button 
            className="confirm-btn"
            onClick={() => setShowYearPopup(true)}
          >Yes
          </button>
          <button 
            className="confirm-btn"
            onClick={onClose}
          >
           No
          </button>
        </div>

        {showYearPopup && (
          <DoYouDonotWant 
            onClose={() => {
              setShowYearPopup(false);
              onClose();
            }}
          />
        )}
      </div>
    </>
  );
};
export default DoYouWant;