import Button from "./Button";

export default function Main({ items }) {
  const formatSize = (size) => (size ? `${(size / 1024).toFixed(1)} KB` : "");

  return (
    <div style={{padding: '2rem'}}>
      <ul>
        <ul>
          <h4 style={{padding: '1rem'}}>Documents</h4>
          {items.documents.map(doc =>(
            <li key={doc.name}>
              <Button fileType={"document"}>
                <span style={{ width: "24px" }}>📄</span>
                <span style={{ flex: 1 }}>{doc.name}</span>
                <span style={{ width: "100px", textAlign: "right" }}>
                  {formatSize(doc.size)}
                </span>
                <span style={{ width: "120px", textAlign: "right" }}>
                  {doc.modified.toLocaleString()}
                </span>
              </Button>
            </li>
          ))}
        </ul>
        <ul>
          <h4 style={{padding: '1rem'}}>Files</h4>
          {items.folders.map(folder => (
            <li key={folder.name}>
              <Button fileType={"folder"}>
                <span style={{ width: "24px" }}>📁</span>
                <span style={{ flex: 1 }}>{folder.name}</span>
                <span style={{ width: "120px", textAlign: "right" }}>
                  {folder.modified.toLocaleString()}
                </span>
              </Button>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  )
}
