import './App.css'
import { useState, useEffect } from 'react'

import WatchForm from './components/WatchForm'
import WatchDisplay from './components/WatchDisplay'
import Watch from './types/Watch'

function App() {
  const [watches, setWatches] = useState<Watch[]>([]);

  const setAddWatch = (name: string, timezone: number) => {
    setWatches(prev => [...prev, {
      id: Date.now(),
      name,
      timezone
    }]);
  };

  const setDeleteWatch = (id: number) => {
    setWatches(prev => prev.filter(watch => watch.id !== id));
  };

  return (
    <div className="app">
      <WatchForm onAdd={setAddWatch} />
      <div className="watches">
        {watches.map(watch => (
          <WatchDisplay 
            key={watch.id} 
            watch={watch} 
            onDelete={setDeleteWatch}
          />
        ))}
      </div>
    </div>
  );
}

export default App;