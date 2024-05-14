import { useEffect, useState } from "react";
import { Button, Select, SelectItem } from "@nextui-org/react";
import ContainerCustom from "@/components/atoms/ContainerCustom/index.js";

function Location({ setValidDistance, locations }) {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [distance, setDistance] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

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

    if (selectedLocation) {
      const targetLatitude = selectedLocation?.lat; // Example latitude of school
      const targetLongitude = selectedLocation?.long; // Example longitude of school

      if (targetLatitude && targetLongitude) {
        const dist = calculateDistance(parseFloat(latitude), parseFloat(longitude), targetLatitude, targetLongitude);
        setDistance(dist);

        if (dist <= 0) {
          // Set validDistance to true if the distance is within 0 km radius of the school
          setValidDistance(true);
        }
      }
    }
  }, [latitude, longitude, setValidDistance, selectedLocation]);

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

  const findAndSetSelectedLocation = (k) => {
    const location = locations.find((location) => {
      return location.id === Number(k?.currentKey);
    });
    setSelectedLocation(location)
  }

  return (
    <ContainerCustom>
      {locations && (
        <div className="flex w-full flex-wrap md:flex-nowrap my-3">

          <Select
            label="Select a location"
            className="max-w-xs"
            onSelectionChange={(k) => findAndSetSelectedLocation(k)}
          >
            {locations.map((location) => (
              <SelectItem key={location.id} value={location.name}>
                {location.name}
              </SelectItem>
            ))}
          </Select>
        </div>
      )}

      <Button color="primary" variant="solid" onClick={getLocation}>
        Get Location
      </Button>

      {latitude && longitude && (
        <div>
          <p>Distance: {distance}</p>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}
    </ContainerCustom>
  );
}

export default Location;
