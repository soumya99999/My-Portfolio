import React, { useState } from 'react';
import { Leva } from 'leva';
import Globe from 'react-globe.gl';
import "../index.css"

const FloatingGlobe = () => {
  // State for latitude and longitude
  const [position, setPosition] = useState({ lat: 40, lng: -100 });

  return (
    <div style={{ marginLeft: "380px", position:"absolute", zIndex:10,marginBottom:"200px"}}>
      {/* Leva Panel for Position Controls */}
      <Leva hidden
        onChange={(values) => {
          setPosition({
            lat: values.lat,
            lng: values.lng,
          });
        }}
        collapsed={false}
        title="Globe Position Controls"
        initialValues={{
          lat: position.lat,
          lng: position.lng,
        }}
      />

      {/* Globe Component with floating effect */}
      <div className="float">
        <Globe 
          height={150}
          width={150}
          backgroundColor="rgba(0, 0, 0, 0)"
          backgroundImageOpacity={0.5}
          showAtmosphere
          showGraticules
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          labelsData={[
            {
              lat: position.lat,  // Use position.lat from state
              lng: position.lng,  // Use position.lng from state
              text: 'Rjieka, Croatia',
              color: 'white',
              size: 15,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default FloatingGlobe;
