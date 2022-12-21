import "./Button.css";

export default function Button({ text, onClick }) {
  return (
    <>
      <button onClick={onClick} className="btn-3d">
        <p className="button__text">{text}</p>
      </button>
    </>
  )
}