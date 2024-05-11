import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

function Location({ setValidDistance }) {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [distance, setDistance] = useState("");

  useEffect(() => {
    // Calculate distance between two coordinates
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
      const R = 6371; // Radius of the earth in km
      const dLat = (lat2 - lat1) * (Math.PI / 180);
      const dLon = (lon2 - lon1) * (Math.PI / 180);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c; // Distance in km
      return distance;
    };

    // Replace these coordinates with your school's coordinates
    const schoolLatitude = 9.7634156; // Example latitude of school
    const schoolLongitude = 105.6608275; // Example longitude of school
    const dist = calculateDistance(parseFloat(latitude), parseFloat(longitude), schoolLatitude, schoolLongitude);
    setDistance(dist);
    if (dist <= 0) {
      // Set validDistance to true if the distance is within 0 km radius of the school
      setValidDistance(true);
    }
  }, [latitude, longitude, setValidDistance]);

  // Handle getting user's geolocation
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <>
      <Button
        color="primary" variant="solid"
        onClick={getLocation}>
        Get Location
      </Button>

      {latitude && longitude && (
        <div>
          <p>Distance: {distance}</p>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}
    </>
  );
}

export default Location;
