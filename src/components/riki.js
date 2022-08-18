import React from "react";
import Card from "react-bootstrap/Card";
import "../css/riki.css";
import Form from "react-bootstrap/Form";
import { AiOutlineSend } from "react-icons/ai";

const CardGrafik = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
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
              <img className="img-trade" src="bTpJ3qGJ_mid" />
            </div>
            <div className="text-dolar">
              <text>$47,061.18</text>
            </div>
          </div>

          <div style={{ paddingTop: "15px" }}>
            <div className="card-sol">
              <div style={{ display: "flex", paddingBottom: "80px" }}>
                <img
                  className="img-bnb"
                  src="https://w7.pngwing.com/pngs/1008/997/png-transparent-bnb-binance-coin-cryptocoin-exchange-coins-crypto-blockchain-cryptocurrency-logo-glyph-icon.png"
                ></img>
                <p className="text-bnb-usd">SOL-USD</p>
              </div>
              <div style={{ display: "flex" }}>
                <button className="button-card">+1.153.08%</button>
                {""}
                <img className="img-trade" src="bTpJ3qGJ_mid" />
              </div>
              <div className="text-dolar">
                <text>$47,061.18</text>
              </div>
            </div>
          </div>
        </div>

        <div style={{ paddingLeft: "15px" }}>
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
              <img className="img-trade" src="bTpJ3qGJ_mid" />
            </div>
            <div className="text-dolar">
              <text>$47,061.18</text>
            </div>
          </div>

          <div style={{ paddingTop: "15px" }}>
            <div className="card-eth" style={{ paddingLeft: "5px" }}>
              <div style={{ display: "flex", paddingBottom: "80px" }}>
                <img
                  className="img-bnb"
                  src="https://w7.pngwing.com/pngs/1008/997/png-transparent-bnb-binance-coin-cryptocoin-exchange-coins-crypto-blockchain-cryptocurrency-logo-glyph-icon.png"
                ></img>
                <p className="text-bnb-usd">ETH-USM</p>
              </div>
              <div style={{ display: "flex" }}>
                <button className="button-card">+1.153.08%</button>
                {""}
                <img className="img-trade" src="bTpJ3qGJ_mid" />
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
              <p>214,957 reactions</p>
              <div style={{ display: "flex" }}>
                <img
                  className="icon-chat"
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                />
                <p style={{ paddingLeft: "15px" }}>Thomas</p>
              </div>
              <div className="buble-chat">
                <Card>
                  <Card.Body>
                    <p>Lorem Ipsum is simply dummy text </p>
                  </Card.Body>
                </Card>
              </div>
              <div style={{ display: "flex" }}>
                <img
                  className="icon-chat"
                  src="https://cdn-icons-png.flaticon.com/512/206/206861.png"
                />
                <p style={{ paddingLeft: "15px" }}>Master Cat</p>
              </div>
              <div className="buble-chat">
                <Card>
                  <Card.Body>
                    <p>Contrary to popular belief, Lorem Ipsum.</p>
                  </Card.Body>
                </Card>
              </div>

              <div style={{ display: "flex", paddingTop: "30px" }}>
                <Form.Control
                  className="chat-share"
                  type="email"
                  placeholder="Share your reaction"
                />
                <div style={{ paddingLeft: "5px" }}>
                  <Card className="icon-chat-bawah">
                    <Card.Body>
                      <AiOutlineSend />
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CardGrafik;
