import { useGetNotesByScanIdQuery } from '../store/index.store';

function ScanDetails({ scan }) {

  const { data: notes, isFetching, isError } = useGetNotesByScanIdQuery(scan.id);

  let content;
  if (isFetching) {
    content = <div>Loading scan details...</div>;
  } else if (isError) {
    content = <div>Failed to load scan details.</div>;
  } else {
    content = (
      <ul className='space-y-2'>
        {notes.map((note, index) => (
          <li key={index} className='border p-3 rounded shadow-sm'>
            <p className='font-semibold'>{note.title}</p>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <p className='mb-2'><span className='font-bold'>Scan ID: </span>{scan.id}</p>
      <p className='mb-2'><span className='font-bold'>Scan Type: </span>{scan.scanType}</p>
      <p className='mb-2'><span className='font-bold'>Date: </span>{new Date(scan.date).toLocaleDateString()}</p>
      <h3 className='font-bold underline mb-2'>Notes</h3>
       {content}
    </div>
  );
}

export default ScanDetails;
