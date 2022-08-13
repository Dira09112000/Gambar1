import React from "react";
import "../css/grafik.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
const Grafik = () => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1,2,3],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [10,20,30],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  return (
    <>
      <div className="container-head">
        <div>$46,541.04</div>
        <div>Bitcoin USD (BTC-USD)</div>
      </div>
      <div className="container-body">
        <div>
        <Line options={options} data={data} />;
          {/* <Bar
            data={{
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            }}
            height={400}
            width={600}
            options={{
              maintainAspectRatio: false,
            }}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Grafik;