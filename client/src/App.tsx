import { useState } from 'react';
import './App.css';
import Create from './components/createFolder';
import Show from './components/showFolder';

export interface Folder {
  title: string;
}

type View = 'create folder' | 'all folders';

function App() {
  const [mode, setMode] = useState<View>('all folders');

  return (
    <div>
      <button onClick={() => setMode('create folder')}>Create Folder</button>
      <button onClick={() => setMode('all folders')}>All Folders</button>
  
      {mode === 'create folder' && <Create />} 
      {mode === 'all folders' && <Show />}
    </div>
  );
  
}

export default App;
