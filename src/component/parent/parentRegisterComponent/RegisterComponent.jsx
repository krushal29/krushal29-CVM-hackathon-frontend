import "./Register.css";

const RegisterComponent = () => {
  return (
    <div className="Register">
      <div className="Register1">
        <div className="Registerh2">
          <h2>Register for an account</h2>
        </div>
        <div className="RegisterName">
          <div className="FirstName">
            <p>First Name</p>
            <input type="text" />
          </div>
          <div className="LastName">
            <p>Last Name</p>
            <input type="text" />
          </div>
        </div>
        <div className="DateOfBirth">
          <input type="date" />
        </div>
        <div className="CurrentAddress">
          <textarea name="" id=""></textarea>
        </div>
        <div className="PermanentAddress">
          <textarea name="" id=""></textarea>
        </div>
        <div className="MobileNumber">
          <input type="text" />
        </div>
        <div className="FatherMother">
          <div className="Fathername">
            <p>Father's Name</p>
            <input type="text" />
          </div>
          <div className="MotherName">
            <p>Mother's Name</p>
            <input type="text" />
          </div>
        </div>
        <div className="AllPhoneNumber">
            <div className="FatherNumber">
                <p>Father's Phone Number</p>
                <input type="text" />
            </div>
            <div className="MotherNumber">
                <p>Mother's Phone Number</p>
                <input type="text" />
            </div>
        </div>
        <div className="Maritrank">
            <p>Merit Rank</p>
            <input type="text" />
        </div>
        <div className="Branch">
            <p>Branch</p>
            <select name="" id="">
                <option value="">Computer Engineering</option>
                <option value="">Computer Science and Design</option>
                <option value="">Information Technology</option>
                <option value="">Mechanical Engineering</option>
            </select>
        </div>
        <div className="next">
            <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
