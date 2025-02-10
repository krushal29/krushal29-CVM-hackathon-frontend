import "./notice.css";

//icons
import { IoMdSearch } from "react-icons/io";

import notice from "../../../assets/Depth 6, Frame 1.png";
import { useState } from "react";

const obj = [
  {
    img: notice,
    Grade: "8th Grade",
    notice: "School Bus Delays",
    Description:
      "jsdkjcbsdjkcbmxc mnx l; lnc,m xmxmc, xm ,mx n z xmn xmn mn mn mnx",
  },
  {
    img: notice,
    Grade: "8th Grade",
    notice: "Exam Schedule Update",
    Description:
      "jsdkjcbsdjkcbmxc mnx l; lnc,m xmxmc, xm ,mx n z xmn xmn mn mn mnx",
  },
  {
    img: notice,
    Grade: "10th Grade",
    notice: "Holiday Announcement",
    Description:
      "jsdkjcbsdjkcbmxc mnx l; lnc,m xmxmc, xm ,mx n z xmn xmn mn mn mnx",
  },
  {
    img: notice,
    Grade: "8th Grade",
    notice: "Parent-Teacher Meeting",
    Description:
      "jsdkjcbsdjkcbmxc mnx l; lnc,m xmxmc, xm ,mx n z xmn xmn mn mn mnx",
  },
  {
    img: notice,
    Grade: "8th Grade",
    notice: "Sports Event",
    Description:
      "jsdkjcbsdjkcbmxc mnx l; lnc,m xmxmc, xm ,mx n z xmn xmn mn mn mnx",
  },
];

const Notice = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="notice">
      <div className="notice1">
        <div className="noticeh1">
          <h1>Notice</h1>
        </div>
        <div className="noticeFind">
          <span>
            <IoMdSearch />
          </span>
          <input
            type="text"
            placeholder="Search notices..."
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>
        <div className="noticeCard1">
          {obj
            .filter((data) => data.notice.toLowerCase().includes(search))
            .map((data, index) => (
              <div key={index} className="noticeCart">
                <div className="noticeImg">
                  <img src={data.img} alt="" />
                </div>
                <div className="noticeDetail1">
                  <div className="noticeWidth">
                    <div className="noticeStd">
                      <p>{data.Grade}</p>
                    </div>
                    <div className="noticeh4">
                      <h4>{data.notice}</h4>
                    </div>
                  </div>
                  <div className="noticeDetail">
                    <div className="noticeInf">
                      <p>{data.Description}</p>
                    </div>
                    <div className="noticeBtn">
                      <button>View</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Notice;
