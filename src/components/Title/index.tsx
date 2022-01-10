import styles from "./styles.module.scss";

interface titleProps {
  icon: string;
  title: string;
  subtitle?: string;
}

export function Title({ icon, title, subtitle }: titleProps) {
  return (
    <div className={styles.title}>
      <i className={icon} />
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
