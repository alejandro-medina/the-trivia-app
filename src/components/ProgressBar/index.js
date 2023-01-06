import styles from './index.module.css';

export default function ProgressBar({ value = 0, max = 0 }) {

  const calcPercent = (value, total) => {
    return Math.floor(value * 100 / total);
  }

  const percent = calcPercent(value, max) + "%";

  return (
    <div className={styles['progress-bar']}>
      <div className={styles['progress']} style={{ width: percent }}>
      </div>
    </div>
  )
}