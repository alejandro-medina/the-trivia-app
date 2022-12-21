import "./Button.css";

export default function Button({ text, onClick }) {
  return (
    <>
      <button onClick={onClick} class="btn-3d">
        <p class="button__text">{text}</p>
      </button>
    </>
  )
}