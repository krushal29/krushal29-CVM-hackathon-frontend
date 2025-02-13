import { useState } from 'react';
import './AchievementForm.css';

const AchievementsForm = () => {
    const [formData, setFormData] = useState({
        eventName: "",
        position: "",
        description: "",
        date: "",
        type: "",
        file: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="AchievementsForm">
            <div className="AchievementsForm1">
                <div className="form-container">
                    <h2>Add an Achievement</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Event Name</label>
                        <input
                            type="text"
                            name="eventName"
                            placeholder="e.g. Grace Hopper Celebration"
                            value={formData.eventName}
                            onChange={handleChange}
                        />

                        <label>Position</label>
                        <select name="position" value={formData.position} onChange={handleChange}>
                            <option value="PARTICIPATION">Participation</option>
                            <option value="FIRST">First</option>
                            <option value="SECOND">Second</option>
                            <option value="THIRD">Third</option>
                            <option value="OTHERS">Others</option>
                        </select>

                        <label>Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />

                        <label>Date</label>
                        <input style={{width:"91%"}}
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />

                        <label>Type</label>
                        <select name="type" value={formData.type} onChange={handleChange}>
                            <option value="ACADEMIC">Academic</option>
                            <option value="SPORTS">Sports</option>
                            <option value="CULTURAL">Cultural</option>
                            <option value="OTHER">Others</option>
                        </select>

                        <label>Upload a File</label>
                        <input type="file" accept=".pdf,.png,.jpg,.docx" onChange={handleFileChange} />

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AchievementsForm;