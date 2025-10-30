import { useContext } from 'react';
import './Dropdown.css';
import PathContext from '../store/path-context-creator';

export default function Dropdown({folders}) {
    const {currentPath,setPath, setCurrentPath} = useContext(PathContext);
    console.log(currentPath)
    function handleClick(folder,e) {
        e.preventDefault();
        setPath(currentPath + folder);
        setCurrentPath(currentPath + folder);
        console.log(folder);
    }
  return (
    <ul className="dropdown-container">
        {folders.map((folder, id) => <li key={id} className="dropdown-item">
            <button
                onClick={(e) => handleClick(folder, e)}
                className="dropdown-button"
            >
                {folder}
            </button>
        </li>)}
    </ul>
  )
}
