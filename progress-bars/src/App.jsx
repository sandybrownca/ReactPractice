import { useEffect, useState } from "react";

export default function App() {
  const [progressBar, setProgressBar] = useState([]);

  function addProgressBar() {
    const id = Date.now()
    const progressItem = {
      progressBarId: id,
      value: 0
    }
    setProgressBar(prev => [
      ...prev,
      { progressBarId: id, value: 0 }
    ]);

  }

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressBar(prev =>
        prev.map(bar => {
          if (bar.value >= 100) return bar;
          return {
            ...bar,
            value: Math.min(bar.value + 10, 100)
          };

        })
      );
    }, 200);
    return () => clearInterval(interval);
  }, [])
  return (
    <div>
      <button onClick={() => { addProgressBar() }}>Add</button>

      {
        progressBar.map((item) => {
          return <div>
            <progress id={item.progressBarId} value={item.value} max="100"> 30% </progress>
          </div>
        })
      }
    </div>
  );
}
