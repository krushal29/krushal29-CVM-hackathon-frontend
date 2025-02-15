import React, { useState, useEffect } from 'react';
import './Studenprofile1.css';

const StudentProfileView = () => {
  const [activeTab, setActiveTab] = useState('attendance');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [studentId, setStudentId] = useState(null);

  // Sample student data - replace with actual data or API call
  const studentInfo = studentId ? {
    name: "John Doe",
    id: "ENR123456",
    program: "BACHELOR OF TECHNOLOGY",
    batch: "CSD-2024"
  } : null;

  const tabs = [
    { id: 'attendance', label: 'Attendance' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'exam_details', label: 'Exam Details' },
    { id: 'placement_details', label: 'Placement Details' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!enrollmentNumber.trim()) {
      setError('Please enter an enrollment number');
      return;
    }
    
    setLoading(true);
    setError(null);
    try {
      // Simulate API call - replace with actual API endpoint
      // const response = await fetch(/api/student/search/${enrollmentNumber});
      // const result = await response.json();
      // setStudentId(result.studentId);
      setStudentId(enrollmentNumber); // For demo purposes
    } catch (err) {
      setError('Failed to find student');
      setStudentId(null);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   if (!studentId) return;

  //   const fetchData = async () => {
  //     setLoading(true);
  //     setError(null);
  //     try {
  //       const response = await fetch(/api/student/${studentId}/${activeTab});
  //       const result = await response.json();
  //       setData(result);
  //     } catch (err) {
  //       setError('Failed to fetch data');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [activeTab, studentId]);

  const renderTabContent = () => {
    if (loading) {
      return (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="alert error">
          {error}
        </div>
      );
    }

    if (!data) {
      return (
        <div className="no-data">
          No data available
        </div>
      );
    }

    switch (activeTab) {
      case 'attendance':
        return (
          <div className="tab-content">
            <h3>Attendance Overview</h3>
            {/* Add your attendance content here */}
          </div>
        );
      case 'achievements':
        return (
          <div className="tab-content">
            <h3>Student Achievements</h3>
            {/* Add your achievements content here */}
          </div>
        );
      case 'exam_details':
        return (
          <div className="tab-content">
            <h3>Examination Details</h3>
            {/* Add your exam details content here */}
          </div>
        );
      case 'placement_details':
        return (
          <div className="tab-content">
            <h3>Placement Information</h3>
            {/* Add your placement content here */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="student-profile">
      <div className="search-section">
        <form onSubmit={handleSubmit} className="search-form">
          <div className="form-group">
            <label htmlFor="enrollment">Enrollment Number</label>
            <input
              id="enrollment"
              type="text"
              value={enrollmentNumber}
              onChange={(e) => setEnrollmentNumber(e.target.value)}
              placeholder="Enter enrollment number"
            />
          </div>
          <button style={{backgroundColor:"#272757",color:"white",borderRadius:"8px",padding:"10px 30px",border:"none",cursor:"pointer",marginBottom:"0px"}} type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>

      {studentInfo && (
        <>
          <h1>{studentInfo.name}</h1>

          <div className="tabs">
            <div className="tabs-list">
              {tabs.map((tab) => (
                <button 
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="tab-panel">
              <div className="card">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StudentProfileView;