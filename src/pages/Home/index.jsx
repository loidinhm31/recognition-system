import FaceDetection from "../../components/templates/FaceDetection/FaceDetection.jsx";
import { useState } from "react";
import Location from "../../components/templates/Location/Location.jsx";

const Home = () => {
  const [studentInfo, setStudentInfo] = useState(null);
  const [validFaceDetection, setValidFaceDetection] = useState(false);
  const [validDistance, setValidDistance] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudentInfo({ ...studentInfo, [name]: value });
  };

  // Render the form
  return (
    <div>
      <h1>Student Check-In</h1>

      {validFaceDetection ? <p>Valid face</p> : <p>Not valid face</p>}

      <FaceDetection setValidFaceDetection={setValidFaceDetection} />

      {validFaceDetection && (
        <>
          <Location setValidDistance={setValidDistance} />

          {validDistance ? (
            <form onSubmit={handleSubmit}>
              <div>
                <p>You are within the 1 km radius of the school.</p>
                <label>
                  Student Name:
                  <input type="text" name="name" value={studentInfo?.name || ""} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                  Student ID:
                  <input type="text" name="id" value={studentInfo?.id || ""} onChange={handleInputChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
              </div>
            </form>
          ) : (
            <p>You are not within the 1 km radius of the school.</p>
          )}
        </>
      )}


    </div>
  );
};

export default Home;
