
import { MoreVertical } from "lucide-react";
import styles from "../../styles/globals.css";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  percent: string;
  positive?: boolean;
}

const StatsCard = ({
  title,
  value,
  subtitle,
  percent,
  positive = true,
}: StatsCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <h3>{title}</h3>
        <MoreVertical size={18} />
      </div>

      <p className={styles.subtitle}>{subtitle}</p>

      <div className={styles.info}>
        <strong>{value}</strong>

        <span className={positive ? styles.green : styles.red}>
          {subtitle === "Last 7 days" ? "Sales" : "Order"} ↗ {percent}
        </span>
      </div>

      <p className={styles.previous}>Previous 7days ($235)</p>

      <button>Details</button>
    </div>
  );
};

export default StatsCard;