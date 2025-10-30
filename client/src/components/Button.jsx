import './Button.css'

function Button({ children }) {
  return (
    <button className="file-button">
        {children}
    </button>
  )
}

export default Button