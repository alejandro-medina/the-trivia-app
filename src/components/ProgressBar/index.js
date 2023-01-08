import styles from './index.module.css';

export default function ProgressBar({ value = 0, max = 0 }) {

  const { progress, 'progress-bar': progress_bar } = styles;
  const percent = Math.floor(value * 100 / max) + "%";

  return (
    <div className={progress_bar}>
      <div className={progress} style={{ width: percent }}>
      </div>
    </div>
  )
}