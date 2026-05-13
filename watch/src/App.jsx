import { useState } from 'react'
import Stopwatch from './components/Stopwatch'
import Timer from './components/Timer'

function App() {
  const [view, setView] = useState("stopwatch")

  return (
    <div className="min-h-screen bg-zinc-900 text-white">

      
      <div className="flex justify-center gap-6 py-6 bg-zinc-800 shadow-md">

        <button
          onClick={() => setView("stopwatch")}
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            view === "stopwatch"
              ? "bg-blue-500"
              : "bg-zinc-700 hover:bg-zinc-600"
          }`}
        >
          Stopwatch
        </button>

        <button
          onClick={() => setView("timer")}
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            view === "timer"
              ? "bg-blue-500"
              : "bg-zinc-700 hover:bg-zinc-600"
          }`}
        >
          Timer
        </button>

      </div>

     
      <div className="flex items-center justify-center mt-10">

        {view === "stopwatch" && <Stopwatch />}
        {view === "timer" && <Timer />}

      </div>

    </div>
  )
}

export default App