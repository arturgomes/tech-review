import React, { useEffect, useState } from "react";

const Timer: React.FC = () => {
  const [time, setTime] = useState(0);

  // useEffect to handle the component mounting logic
  useEffect(() => {
    console.log("Timer component has mounted.");
  }, []); // This runs only once, like componentDidMount

  // useEffect to handle the interval timer logic
  useEffect(() => {
    // Start a timer that increments the time every second
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    // Return a cleanup function to clear the interval
    return () => clearInterval(timer);
  }, []); // Also runs only once on mount, and clears on unmount

  // useEffect to handle the component unmounting logic
  useEffect(() => {
    return () => {
      console.log("Timer component is unmounting, cleanup complete.");
    };
  }, []); // Runs only when the component unmounts

  return (
    <div>
      <h2>Elapsed Time: {time} seconds</h2>
    </div>
  );
};

export default Timer;
