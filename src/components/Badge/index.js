import styles from './index.module.css';

export default function Badge({ children, className = '' }) {
  return (
    <>
      <p className={`${styles.badge} ${className ? styles[className] : ''}`}>
        {children}
      </p>
    </>
  )
}
