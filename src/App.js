import React, { useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState("00:00");
  const [progress, setProgress] = useState(0);

  const handleTimeChange = (e) => {
    const inputTime = e.target.value;
    setTime(inputTime);

    // calculate progress
    const [hours, minutes] = inputTime.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes;
    const percentage = (totalMinutes / 1440) * 100;
    setProgress(percentage.toFixed(2));
  };

  return (
    <div className="App">
      <label>
        Time:
        <input type="time" value={time} onChange={handleTimeChange} />
      </label>
      <span>{progress}%</span>
    </div>
  );
}

export default App;
