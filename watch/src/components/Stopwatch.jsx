import React from 'react'
import { useState, useEffect } from 'react'

function Stopwatch() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval = null
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const handleStart = () => {
    setIsRunning(true)
  }

  const handleStop = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setIsRunning(false)
    setTime(0)
  }

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
      
      <div className="bg-zinc-800 text-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center">
        
        
        <h1 className="text-2xl font-semibold mb-6 text-zinc-300">
          Stopwatch
        </h1>

        
        <div className="text-6xl font-bold tracking-widest mb-8">
          {time}
        </div>

        
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
  )
}

export default Stopwatch