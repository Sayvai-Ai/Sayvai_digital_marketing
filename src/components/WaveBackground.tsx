import Wave from "react-wavify";
import { useState } from "react";

const WaveBackground = () => {
  const [amplitude, setAmplitude] = useState(20);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Adjust wave height based on cursor Y position
    const y = e.clientY / window.innerHeight;
    setAmplitude(y * 40); // scales amplitude dynamically
  };

  return (
    <div
      className="absolute bottom-0 left-0 w-full h-40"
      onMouseMove={handleMouseMove}
    >
      <Wave
        fill="#00C0A3"
        paused={false}
        options={{
          height: 20,
          amplitude: amplitude,
          speed: 0.25,
          points: 3,
        }}
      />
    </div>
  );
};

export default WaveBackground;
