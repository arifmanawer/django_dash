import CandlestickChart from './components/CandlestickChart';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Dashboard</h1>
      <div>
        <CandlestickChart />
        <LineChart />
        <BarChart />
        <PieChart />
      </div>
    </div>
  );
}
