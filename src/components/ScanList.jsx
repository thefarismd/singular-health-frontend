import { Scan } from 'lucide-react';
import { useGetScansQuery } from '../store/index.store';

function ScanList({setSelectedScan}) {
  const { data: scans, isLoading, isError } = useGetScansQuery();
  if (isLoading) return <div>Loading scans...</div>;
  if (isError) return <div>Failed to load scans.</div>;

  return (
    <div className='space-y-2'>
      {scans.map((scan) => (
        <div key={scan.id} onClick={() => setSelectedScan(scan)} className='p-1 cursor-pointer hover:bg-gray-100'>
          <div className='font-medium flex items-center gap-2'>
            <Scan className='text-gray-500 w-5 h-5' />
            {scan.id}: {new Date(scan.date).toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ScanList;
