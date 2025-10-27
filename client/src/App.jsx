import { useContext } from 'react'
import Main from './components/Main'
import { PathContext } from './store/path-context'

const inputStyle = {
  width: "80%",               
  padding: "8px 12px",
  marginBottom: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  outline: "none",          
  fontSize: "1rem",
  backgroundColor: "#1e1e1e",
  color: "#f0f0f0",           
  transition: "all 0.2s ease",
}

const buttonStyle = {
    padding: "8px 16px",
    marginLeft: "8px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#58a6ff",
    color: "#fff",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.2s ease",
  }

function App() {
  const { files, path, setPath, setFiles } = useContext(PathContext)
  return (
    <div style={{
      padding: '2rem'
    }}>
      <h1>File Manager</h1>
      <input
        value={path}
        onChange={(e) => setPath(e.target.value)}
        placeholder="Enter folder path..."
        style={inputStyle}
      />

      <button style={buttonStyle} onClick={() => window.api.getFiles(path).then(setFiles)}>
        Open
      </button>
      <Main items={files}/>
    </div>
  )
}

export default App
