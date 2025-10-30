import { useContext } from 'react'
import Main from './components/Main'
import PathContext from './store/path-context-creator.js'
import SearhInput from './components/SearchInput'

function App() {
  const { files } = useContext(PathContext);
  return (
    <div style={{
      padding: '2rem',
    }}>
      <form style={{padding: '1rem'}}>
        <SearhInput
          className="search-input"
          placeholder="Enter folder path..."
        />
      </form>
      <Main items={files}/>
    </div>
  )
}

export default App
