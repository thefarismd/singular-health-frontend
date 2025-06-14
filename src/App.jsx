import ScanList from "./components/ScanList";
import ScanDetails from "./components/ScanDetails";
import NoteForm from "./components/NoteForm";
import { useState } from 'react';
import { User } from 'lucide-react';

function App() {

  const [selectedScan, setSelectedScan] = useState(null);

  return (
    <div className='flex h-screen'>
      {/* Sidebar / Scan List */}
      <aside className='w-1/5 p-4 border-r'>
        <h2 className='font-bold text-lg mb-4 text-center bg-gray-300'>Patient John Doe</h2>
        <ScanList setSelectedScan={setSelectedScan} />
      </aside>

      {/* ScanDetails */}
      <main className='w-4/5 p-4 flex flex-col h-full'>
        <h2 className='font-bold text-lg mb-4 text-center bg-gray-300'>Scan Details</h2>
        <div className='flex-1 overflow-y-auto mb-4'>{selectedScan ? <ScanDetails scan={selectedScan} /> : <div className='text-gray-500'>Select patient's scan to view details.</div>}</div>
        
        {/* NoteForm */}
        <div className='mb-6 min-h-[200px]'>
          <h3 className='font-bold text-lg mb-4 text-center bg-gray-300'>Add Note</h3>
          {selectedScan ? <NoteForm scan={selectedScan} /> : <div className='text-gray-500'>Select patient's scan to add note.</div>}
        </div>
      </main>
    </div>
  );
}

export default App;