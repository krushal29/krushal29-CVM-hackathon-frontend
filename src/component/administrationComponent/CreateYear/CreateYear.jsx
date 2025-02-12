
import { useState } from "react";
import "./CreateYear.css";
import DoYouWant from "./DoYouWant";
import DoYouDonotWant from "./DoYouDonotWant";

const CreateYear = () => {
     const [showPopup, setShowPopup] = useState(false);
     const [ShowPopup1,setShowPopup1]=useState(false);

  return (
    <div className="overlay">
      <div className="modal">
        <h2>Do you want to create a new year?</h2>
        <div className="button-group">
          <button className="yes" onClick={()=>setShowPopup(true)}>Yes</button>
          {showPopup && <DoYouWant onClose={() => setShowPopup(false)} />}

          <button className="no" onClick={()=>setShowPopup1(true)}>No</button>
          {ShowPopup1&&<DoYouDonotWant onClose={()=>setShowPopup1(false)}/>}
        </div>
      </div>
    </div>
  );
};

export default CreateYear;
