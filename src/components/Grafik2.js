import "../css/grafik2.css";

const Grafik2 = () => {
  return (
    <>
      <div style={{ paddingLeft: "40", paddingRight: "20" }}>
        <div
          style={{
            width: "100%",
            height: "auto",
            background: "black",
            display: "flex",
          }}
        >
          <div>
            <div style={{ display: "flex" }}>
              <div className="kotak">KOTAK 1</div>
              <div className="kotak">KOTAK 2</div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="kotak">KOTAK 3</div>
              <div className="kotak">KOTAK 4</div>
            </div>
          </div>
          <div className="kotak-panjang">KOTAK 5</div>
        </div>
      </div>
    </>
  );
};
export default Grafik2;
