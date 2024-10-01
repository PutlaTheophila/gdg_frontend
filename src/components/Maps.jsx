import React, { useState, useEffect, useRef } from 'react';
import { useLoaderData } from 'react-router-dom';

export async function loader (){
    try {
        const [codeResponse, connectorResponse] = await Promise.all([
            fetch('https://gdg-googlemapsapi.onrender.com/api/v1/code'),
            fetch('https://gdg-googlemapsapi.onrender.com/api/v1/code/connectors'),
        ]);

        // Check if responses are OK
        if (!codeResponse.ok) throw new Error('Failed to fetch code data');
        if (!connectorResponse.ok) throw new Error('Failed to fetch connector data');

        const codeData = await codeResponse.json();
        const connectorData = await connectorResponse.json();

        return {
            codeData,
            connectorData,
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to be handled by the caller
        return null
    }
    return null;    
}

const MapLayout = () => {
    const data = useLoaderData();

    //destructuring
    console.log('importnat data',data?.codeData?.markers);
    const markers = [...data?.codeData?.markers];
    const connectors = [...data?.connectorData?.connectors];
    console.log('importnat' ,data?.connectorData?.connectors);

    const [inputValue, setInputValue] = useState('');
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);

  // Static arrays
//   const markCoordinates = [
//     { latitude: 34.0522, longitude: -118.2437 },
//     { latitude: 36.0522, longitude: -118.2437 },
//     { latitude: 36.1699, longitude: -115.1398 }
//   ];

//   const connectCoordinates = [
//     [
//       { latitude: 34.0522, longitude: -118.2437 },
//       { latitude: 36.1699, longitude: -115.1398 }
//     ]
//   ];

const markCoordinates = [...markers];
const connectCoordinates = [...connectors];
console.log('main',connectCoordinates)

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAMDCqRKW6XPHJvxKYqvgr24r4RfhrjAss&libraries=places`;
    script.async = true;
    script.onload = initMap;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initMap = () => {
    if (mapRef.current) {
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: { lat: 35.0522, lng: -116.2437 },
        zoom: 5,
      });
      setMap(mapInstance);

      // Add markers
      markCoordinates.forEach(coord => {
        new window.google.maps.Marker({
          position: { lat: coord.latitude, lng: coord.longitude },
          map: mapInstance,
          label: {
            text: coord.label, // The text you want to display
            color: '#000', // Optional: Set label color
            fontSize: '12px' // Optional: Set label font size
          }
        });
        console.log(coord.latitude , coord.longitude);
      });

      // Connect coordinates
    //   connectCoordinates.forEach(connection => {
    //     new window.google.maps.Polyline({
    //       path: connection.map(coord => ({ lat: coord.latitude, lng: coord.longitude })),
    //       geodesic: true,
    //       strokeColor: '#FF0000',
    //       strokeOpacity: 1.0,
    //       strokeWeight: 2,
    //       map: mapInstance,
    //     });
    //   });
    connectCoordinates.forEach(connection => {
        const markers = connection.markers;    
        new window.google.maps.Polyline({
          path: markers.map(coord => ({ lat: coord.latitude, lng: coord.longitude })), // Map lat/lng from the markers array
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2,
          map: mapInstance, // Assuming mapInstance is the initialized Google Map object
        });
      });
      
    }
  };



  const handleSubmit = async () => {
    console.log('Submitted:', inputValue);
    try {
        const res = await fetch("https://gdg-googlemapsapi.onrender.com/api/v1/code", {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: inputValue }), 
        });

        if (!res.ok) {
            const errorText = await res.text(); // Get the error response as text
            console.error('Error response:', errorText);
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json(); // Parse the JSON response
        console.log('Response:', result);
    } catch (error) {
        console.error('Error submitting code', error);
    }
};

  const handleClear = () => {
    setInputValue('');
    if (map) {
      map.setCenter({ lat: 35.0522, lng: -116.2437 });
      map.setZoom(5);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen items-center justify-center">
      <div className="w-[95vw] h-[40vh] md:w-[40vw] md:h-[90vh] p-4 bg-gray-100 flex flex-col rounded-lg">
        <div className="flex-grow flex flex-col border-slate-950">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full flex-grow p-2 border border-gray-300 rounded resize-none"
            placeholder="enter code"
          />
        </div>
        <div className="flex justify-center mt-2 space-x-2">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Run
          </button>
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Clear
          </button>
        </div>
      </div>
      <div className="w-[95vw] h-[40vh] md:w-[60vw] md:h-[90vh] m-[50px] rounded-lg" ref={mapRef}>
        {/* Google Map will be rendered here */}
      </div>
    </div>
  );
};

export default MapLayout;







