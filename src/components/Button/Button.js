import "./Button.css";

export default function Button({ text, onClick, disabled = false }) {
  return (
    <>
      <button disabled={disabled} onClick={onClick} className="btn-3d">
        <p className="button__text">{text}</p>
      </button>
    </>
  )
}