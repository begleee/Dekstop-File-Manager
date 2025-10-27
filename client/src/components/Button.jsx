let buttonStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "10px",
  width: "100%",
  padding: "10px 14px",
  marginBottom: "6px",
  borderRadius: "8px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  fontSize: "0.95rem",
  fontWeight: 500,
  cursor: "pointer",
  textAlign: "left",
  transition: "all 0.2s ease",
}

const docStyle = {
  backgroundColor: "rgba(161, 161, 161, 0.05)",
}

const folderStyle = {
  backgroundColor: "rgba(255, 200, 0, 0.1)",
}

function Button({ children, fileType }) {
    fileType === 'folder' ? buttonStyle = {
        ...buttonStyle,
        ...folderStyle
    } : buttonStyle = {
        ...buttonStyle,
        ...docStyle
    }
  return (
    <button style={buttonStyle}>
        {children}
    </button>
  )
}

export default Button