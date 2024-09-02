import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    RadialLinearScale,
    ArcElement,
    Filler,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  
  // 註冊 Chart.js 的必要組件
  export function registerChartComponents() : void {
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      BarElement,
      RadialLinearScale,
      ArcElement,
      Filler,
      Title,
      Tooltip,
      Legend
    );
  }
  