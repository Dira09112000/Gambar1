import "../css/grafik2.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Grafik2 = () => {
  return (
    <>
      <div style={{ paddingLeft: "40", paddingRight: "20" }}>
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
          }}
        >
          <div>
            <div style={{ display: "flex" }}>
              <div className="card-bnb" style={{ paddingLeft: "5px" }}>
                <div style={{ display: "flex", paddingBottom: "80px" }}>
                  <img
                    className="img-bnb"
                    src="https://w7.pngwing.com/pngs/1008/997/png-transparent-bnb-binance-coin-cryptocoin-exchange-coins-crypto-blockchain-cryptocurrency-logo-glyph-icon.png"
                  ></img>
                  <p className="text-bnb-usd">BNB-USD</p>
                </div>
                <div style={{ display: "flex" }}>
                  <button className="button-card">+1.153.08%</button>
                  {""}
                </div>
                <div className="text-dolar">
                  <text>$47,061.18</text>
                </div>
              </div>

              <div className="card-btc" style={{ paddingLeft: "5px" }}>
                <div style={{ display: "flex", paddingBottom: "80px" }}>
                  <img
                    className="img-bnb"
                    src="https://w7.pngwing.com/pngs/1008/997/png-transparent-bnb-binance-coin-cryptocoin-exchange-coins-crypto-blockchain-cryptocurrency-logo-glyph-icon.png"
                  ></img>
                  <p className="text-bnb-usd">ETH-USM</p>
                </div>
                <div style={{ display: "flex" }}>
                  <button className="button-card-btc">+1.153.08%</button>
                  {""}
                </div>
                <div className="text-dolar">
                  <text>$47,061.18</text>
                </div>
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div className="card-bnb" style={{ paddingLeft: "5px" }}>
                <div style={{ display: "flex", paddingBottom: "80px" }}>
                  <img
                    className="img-bnb"
                    src="https://w7.pngwing.com/pngs/1008/997/png-transparent-bnb-binance-coin-cryptocoin-exchange-coins-crypto-blockchain-cryptocurrency-logo-glyph-icon.png"
                  ></img>
                  <p className="text-bnb-usd">BNB-USD</p>
                </div>
                <div style={{ display: "flex" }}>
                  <button className="button-card">+1.153.08%</button>
                  {""}
                </div>
                <div className="text-dolar">
                  <text>$47,061.18</text>
                </div>
              </div>

              <div className="card-bnb" style={{ paddingLeft: "5px" }}>
                <div style={{ display: "flex", paddingBottom: "80px" }}>
                  <img
                    className="img-bnb"
                    src="https://w7.pngwing.com/pngs/1008/997/png-transparent-bnb-binance-coin-cryptocoin-exchange-coins-crypto-blockchain-cryptocurrency-logo-glyph-icon.png"
                  ></img>
                  <p className="text-bnb-usd">BNB-USD</p>
                </div>
                <div style={{ display: "flex" }}>
                  <button className="button-card">+1.153.08%</button>
                  {""}
                </div>
                <div className="text-dolar">
                  <text>$47,061.18</text>
                </div>
              </div>
            </div>
          </div>

          <div style={{ paddingLeft: "15px" }}>
            <Card className="card-chat">
              <Card.Body>
                <p className="reactions">214,957 reactions</p>
                <div style={{ display: "flex" }}>
                  <img
                    className="icon-chat"
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  />
                  <p className="thomas" style={{ paddingLeft: "15px" }}>
                    Thomas
                  </p>
                </div>
                <div className="buble-chat">
                  <Card>
                    <Card.Body>
                      <p className="isi-chat">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </Card.Body>
                  </Card>
                </div>
                <div style={{ display: "flex" }}>
                  <img
                    className="icon-chat"
                    src="https://cdn-icons-png.flaticon.com/512/206/206861.png"
                  />
                  <p className="thomas" style={{ paddingLeft: "15px" }}>
                    Master Cat
                  </p>
                </div>
                <div className="buble-chat">
                  <Card>
                    <Card.Body>
                      <p className="isi-chat">
                        orem Ipsum has been the industry's standard dummy text
                        ever since the 1500s.
                      </p>
                    </Card.Body>
                  </Card>
                </div>

                <div style={{ display: "flex", paddingTop: "50px" }}>
                  <Form.Control
                    className="chat-share"
                    type="email"
                    placeholder="Share your reaction"
                  />
                  <div style={{ paddingLeft: "5px" }}>
                    <Card className="icon-chat-bawah">
                      <Card.Body>{/* <AiOutlineSend/> */}</Card.Body>
                    </Card>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default Grafik2;
