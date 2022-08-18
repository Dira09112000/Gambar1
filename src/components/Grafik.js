import React from "react";
import "../css/grafik.css";
import { FiArrowDownRight } from "react-icons/fi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
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
        position: "top",
      },
      title: {
        display: false,
        text: "",
      },
    },
  };

  const labels = ["1PM", "4PM", "7PM", "50PM", "1AM", "4AM", "7AM", "10AM"];

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: ["48.000", "47.500", "47.000", "46.500", "46.000"],
        borderColor: "#6464D9",
        fill: true,
        backgroundColor: "yellow",
      },
    ],
  };

  return (
    <div className="container-body">
      <div className="container-head">
        <div className="container-duit">
          <div style={{ fontSize: "30px" }}>$46,541.04</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ paddingRight: "20px" }}>
              <div className="kotak-persen"> -1,480.67%</div>
            </div>
            <div
              style={{
                width: "25px",
                height: "25",
                borderRadius: "25px",
                background: "#EE78B3",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                color: "white",
              }}
            >
              <FiArrowDownRight />
            </div>
          </div>
        </div>

        <div>Bitcoin USD (BTC-USD)</div>
      </div>
      <div className="container-head">
        <div className="container-sub-head">
          <div className="kotak-sub-head-1">Summary</div>
          <div className="kotak-sub-head-1">Chart</div>
          <div className="kotak-sub-head-1">Conversation</div>
          <div className="kotak-sub-head-1">Historical Data</div>
        </div>
        <div className="container-sub-head">
          <div className="kotak-sub-head-2">1H</div>
          <div className="kotak-sub-head-2">24H</div>
          <div className="kotak-sub-head-2">1W</div>
          <div className="kotak-sub-head-2">1M</div>
          <div className="kotak-sub-head-2">3M</div>
          <div className="kotak-sub-head-2">4M</div>
        </div>
      </div>
      <div style={{ padding: "20px" }}>
        <div>
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Grafik;
