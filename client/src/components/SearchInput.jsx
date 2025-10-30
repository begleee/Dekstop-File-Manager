import { useContext, useState } from 'react'
import './Input.css'
import PathContext from '../store/path-context-creator'

export default function SearhInput({props}) {
  const [isOpen, setIsOpen] = useState(false);
  const {path, setPath, files} = useContext(PathContext);

  let suggestions = files.folders.map(folder => folder.name);

  const filtered = suggestions.filter((item) =>
    item.toLowerCase().includes(path.toLowerCase())
  );
  return (
    <>
      <input
        value={path} 
        onChange={(e) => setPath(e.target.value)} 
        className='search-input' 
        {...props} 
        type="text"
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      />
      {isOpen && (<div>
        {filtered.map((folder => <button>
          {folder.name}
        </button>))}
      </div>)}
    </>
  )
}
