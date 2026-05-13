import React from 'react'
import { useState, useEffect } from 'react'

function Timer() {
  const [inputMinutes, setInputMinutes] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [initialTime, setInitialTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    const totalSeconds = parseInt(inputMinutes) * 60;
    setTimeLeft(totalSeconds);
    setInitialTime(totalSeconds);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  // formatting mm:ss
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center">

      <div className="bg-zinc-800 text-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center">

        
        <h1 className="text-2xl font-semibold mb-6 text-zinc-300">
          Timer
        </h1>

        
        <div className="text-6xl font-bold tracking-widest mb-8">
          {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </div>

        
        <input
          type="number"
          placeholder="Enter minutes"
          value={inputMinutes}
          onChange={(e) => setInputMinutes(e.target.value)}
          className="w-full mb-6 p-3 rounded-lg text-center bg-zinc-700 outline-none focus:ring-2 focus:ring-blue-500"
        />

        
        <div className="flex justify-center gap-4">

          <button
            onClick={handleStart}
            className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Start
          </button>

          <button
            onClick={handleStop}
            className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Stop
          </button>

          <button
            onClick={handleReset}
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Reset
          </button>

        </div>

      </div>
    </div>
  );
}

export default Timer;