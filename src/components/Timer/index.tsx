import React, { useEffect, useState } from "react";
import Button from "../ButtonGroup/Button";

const Timer: React.FC = () => {
  const [time, setTime] = useState(0);

  // Log when the component mounts
  useEffect(() => {
    console.log("Timer component has mounted.");
  }, []); // Runs only once, like componentDidMount

  // Increment the timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    // Cleanup function to clear the interval on unmount
    return () => {
      clearInterval(timer);
      console.log("Timer component is unmounting, cleanup complete.");
    };
  }, []); // Runs once on mount, and clears on unmount

  // Log whenever the time state changes (component updates)
  useEffect(() => {
    console.log(`Timer updated: time is now ${time}`);
  }, [time]); // Runs every time `time` changes, demonstrating component updates

  // Function to reset the timer
  const handleReset = () => {
    setTime(0);
    console.log("Timer reset to 0");
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <h2>Elapsed Time: {time} seconds</h2>
      <Button onClick={handleReset}>
        Reset Timer
      </Button>
    </div>
  );
};

export default Timer;
