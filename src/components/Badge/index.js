import styles from './index.module.css';

export default function Badge({ children, className }) {

  const { badge, [className]: type } = styles;

  return (
    <p className={`${badge} ${type}`}>
      {children}
    </p>
  )
}
