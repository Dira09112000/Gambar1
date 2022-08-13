import React from "react";
import "../css/grafik.css";
import { Bar } from "react-chartjs-2";

const Grafik = () => {
  return (
    <>
      <div className="container-head">
        <div>$46,541.04</div>
        <div>Bitcoin USD (BTC-USD)</div>
      </div>
      <div className="container-body">
        <div>
          <Bar
            data={{
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            }}
            height={400}
            width={600}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Grafik;
