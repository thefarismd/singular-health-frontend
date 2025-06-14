import { useDispatch, useSelector } from 'react-redux';
import { setTitle, setContent, resetForm } from '../store/index.store'
import { useAddNoteToScanMutation } from '../store/index.store';

function NoteForm({scan}) {

  const dispatch = useDispatch();
  const { title, content } = useSelector((state) => state.note);
  const [addNoteToScan] = useAddNoteToScanMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNoteToScan({
      scanId: scan.id,
      note: { title, content },
    });
    dispatch(resetForm());
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <input type='text' value={title} onChange={(e) => dispatch(setTitle(e.target.value))} placeholder='Note title' className='border p-2 w-full rounded' required />
      <textarea value={content} onChange={(e) => dispatch(setContent(e.target.value))} placeholder='Note content' className='border p-2 w-full rounded' rows='3' required />
      <button type='submit' className='font-semibold text-lg bg-gray-300 px-4 py-2 rounded cursor-pointer'>
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;
