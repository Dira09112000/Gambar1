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
  Filler,
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
    Legend,
    Filler
  );
  const ctx = document.getElementById("chart").getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, 0, 300);

  gradient.addColorStop(0, "rgba(111, 130, 247, 0.8)");
  gradient.addColorStop(1, "rgba(100, 100, 0,0)");

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
      },
    },
  };

  const data = {
    labels: ["10AM", "1PM", "4PM", "7PM", "10PM", "1AM", "4AM", "7AM", "10AM"],
    datasets: [
      {
        fill: true,
        tension: 0.1,
        pointRadius: 0,
        pointBackgroundColor: "purple",
        fillColor: "rgba(250,174,50,0.5)",
        strokeColor: "#ff6c23",
        pointColor: "#fff",
        pointStrokeColor: "#ff6c23",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "#ff6c23",
        backgroundColor: "purple",
        borderWidth: 10,
        borderColor: "blue",
        fill: {
          target: "origin",
          above: gradient, // Area will be red above the origin
        },

        data: [
          48879, 48773, 46538, 48762, 46903, 47595, 46818, 47561, 47636, 48307,
          46257, 47676, 46980, 46340, 48994, 47960, 48975, 46139, 47085, 47852,
          46656, 46248, 47050, 47354, 46331, 47364, 46375, 46968, 47116, 47145,
          46598, 46365, 46544, 46265, 47149, 46887, 46816, 47331, 46584, 47715,
          46474, 46437, 46354, 46409, 46792, 46552, 47755, 46504, 46670, 47210,
          47293, 46305, 47436, 46556, 47107, 47123, 47637, 47213, 47851, 46307,
          46384, 47489, 46452, 46601, 47238, 47624, 46150, 47934, 46532, 46818,
          46388, 46472, 47241, 46162, 47833, 46341, 47313, 46515, 46612, 47151,
          47929, 46890, 47168, 46999, 46456, 47737, 47235, 46498, 46511, 46311,
          47203, 47529, 47775, 47128, 46532, 46712, 46195, 46820, 46710, 46292,
          46788, 46025, 47969, 46071, 46657, 47782, 46414, 46148, 46436, 47793,
          47780, 46149, 47078, 46815, 46308, 46803, 46514, 46084, 46637, 46305,
          47436, 46556, 47107, 47123, 47637, 47213, 47851, 46307, 46897, 46936,
          47552, 48151, 47883, 46465, 46126, 46390, 46624, 47907, 47501, 46983,
          46195, 48499, 47398, 48027, 46869, 46846, 47736, 47152, 48468, 48283,
          47578, 48035, 47194, 47305, 46362, 48113, 46229, 47166, 47601, 46849,
          46897, 46587, 47395, 47254, 46623, 46382, 46248, 46883, 46075, 48116,
          46282, 46538, 47735, 46503, 47004, 47935, 46149, 46909, 46854, 46476,
          46163, 46330, 46488, 48151, 47607, 46170, 47184, 46502, 46854, 47230,
          48047, 47220, 46597, 46642, 47315, 48190, 47512, 46739, 46708, 47726,
          46011, 47755, 47309, 46737, 46806, 46661, 47476, 46362, 47789, 46608,
          48086, 48012, 46536, 46566, 46412, 48309, 47526, 46749, 46241, 48255,
          46705, 46389, 46633, 47790, 48018, 48357, 48460, 46655,
        ],
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
