import { useState } from 'react';

const App = () => {
    const [studentInfo, setStudentInfo] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [distance, setDistance] = useState("");
    const [validDistance, setValidDistance] = useState(false);

    // Function to calculate distance between two coordinates
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        console.log("Calculate distance");
        const R = 6371; // Radius of the earth in km
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // Distance in km
        console.log(distance)
        return distance;
    };

    // Function to handle getting user's geolocation
    const getLocation = () => {
        console.log("Getting location")
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (error) => {
                    console.error('Error getting geolocation:', error);
                }
            );

            console.log(latitude)
            console.log(longitude)

            // Replace these coordinates with your school's coordinates
            const schoolLatitude = 10.7634156; // Example latitude of school
            const schoolLongitude = 106.6608275; // Example longitude of school
            const dist = calculateDistance(
                parseFloat(latitude),
                parseFloat(longitude),
                schoolLatitude,
                schoolLongitude
            );
            console.log(dist)
            setDistance(dist);
            if (dist <= 1) {
                // Set validDistance to true if the distance is within 1 km radius of the school
                setValidDistance(true);
            }
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Handle")

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
            <button onClick={getLocation}>Get Location</button>
            {latitude && longitude && (
                <div>
                    <p>Distance: {distance}</p>
                    <p>Latitude: {latitude}</p>
                    <p>Longitude: {longitude}</p>
                    <form onSubmit={handleSubmit}>
                        {validDistance ? (
                            <div>
                                <p>You are within the 1 km radius of the school.</p>
                                <label>
                                    Student Name:
                                    <input
                                        type="text"
                                        name="name"
                                        value={studentInfo?.name || ''}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <br />
                                <label>
                                    Student ID:
                                    <input
                                        type="text"
                                        name="id"
                                        value={studentInfo?.id || ''}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <br />
                                <button type="submit">Submit</button>
                            </div>
                        ) : (
                            <p>You are not within the 1 km radius of the school.</p>
                        )}
                    </form>
                </div>
            )}
        </div>
    );
};

export default App;
