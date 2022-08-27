import "../css/grafik2.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { BsFillArrowDownRightCircleFill } from "react-icons/bs";

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
            {/* BNB */}
            <div className="card-bnb" style={{ paddingLeft: "5px" }}>
            <div style={{ display: "flex",paddingLeft:'15px', paddingTop:'25px',paddingBottom: "60px" }}>
              
              <div
                    style={{backgroundColor:'#D0F4DA',
                            borderRadius:'5px',
                            width:'40px',
                            height:'40px',
                            paddingLeft:'10px',
                            paddingTop:'10px'}}>
              <img className="img-bnb" 
              src="https://cdn.iconscout.com/icon/free/png-256/bnb-5382255-4498127.png"
              ></img>
              </div>
              <div>
              <text className="text-bnb-usd">BNB-USD</text>
              <div className="text-bawah-bnb">BinanceCoin USD</div>
              </div>
            </div>
            <div style={{ display: "flex", paddingLeft:'17px' }}>
              <button className="button-card-bnb">
                <text style={{color:' #569B70'}}>+1.153.08%</text>
              </button>
              {""}
            </div>
            <div className="text-dolar">
              <text>$47,061.18 <BsFillArrowUpRightCircleFill color="green"/></text>
            </div>
          </div>   

                        
              {/* BTC */} 
          <div className="card-btc" style={{ paddingLeft: "5px" }}>
            <div style={{ display: "flex",paddingLeft:'15px', paddingTop:'25px',paddingBottom: "60px" }}>
              <div
                    style={{backgroundColor:'FFD2E8',
                            borderRadius:'5px',
                            width:'40px',
                            height:'40px',
                            paddingLeft:'10px',
                            paddingTop:'10px'}}>
              <img className="img-bnb" src="https://png.monster/wp-content/uploads/2022/02/png.monster-622.png"
              ></img>
              </div>
              <div>
              <text className="text-bnb-usd">BTC-USD</text>
              <div className="text-bawah-bnb">Bitcoin USD</div>
              </div>            </div>
            <div style={{ display: "flex", paddingLeft:'17px' }}>
            <button className="button-card-bnb">
                <text style={{color:'pink'}}>-1.480.67%</text>
              </button>              
              {""}
            </div>
            <div className="text-dolar">
              <text>$46,541.04 <BsFillArrowDownRightCircleFill color="pink"/></text>
            </div>
          </div>             

            </div>

         
            <div style={{ display: "flex" }}>
          {/* SOL */}
             
          <div className="card-bnb" style={{ paddingLeft: "5px" }}>
            <div style={{ display: "flex",paddingLeft:'15px', paddingTop:'25px',paddingBottom: "60px" }}>
              
              <div
                    style={{backgroundColor:'#D0F4DA',
                            borderRadius:'5px',
                            width:'40px',
                            height:'40px',
                            paddingLeft:'10px',
                            paddingTop:'10px'}}>
              <img className="img-bnb" 
              src="https://cdn.iconscout.com/icon/free/png-256/sol-5382327-4498199.png"
              ></img>
              </div>
              <div>
              <text className="text-bnb-usd">SOL-USD</text>
              <div className="text-bawah-bnb">Solana USD</div>
              </div>            </div>
            <div style={{ display: "flex", paddingLeft:'17px' }}>
            <button className="button-card-bnb">
                <text style={{color:' #569B70'}}>+1.714,90%</text>
              </button>              
              {""}
            </div>
            <div className="text-dolar">
              <text>$97.02  <BsFillArrowUpRightCircleFill color="green"/></text>
            </div>
          </div>  


          {/* ETH */}
          <div className="card-bnb" style={{ paddingLeft: "5px" }}>
            <div style={{ display: "flex",paddingLeft:'15px', paddingTop:'25px',paddingBottom: "60px" }}>
              
              <div
                    style={{backgroundColor:'#D0F4DA',
                            borderRadius:'5px',
                            width:'40px',
                            height:'40px',
                            paddingLeft:'10px',
                            paddingTop:'10px'}}>
              <img className="img-bnb" 
              src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/ethereum-512.png"
              ></img>
              </div>
              <div>
              <text className="text-bnb-usd">ETHUSD</text>
              <div className="text-bawah-bnb">Ethereum USD</div>
              </div>            </div>
            <div style={{ display: "flex", paddingLeft:'17px' }}>
            <button className="button-card-bnb">
                <text style={{color:' #569B70'}}>+3.189.09%</text>
              </button>              
              {""}
            </div>
            <div className="text-dolar">
              <text>$3,051.57  <BsFillArrowUpRightCircleFill color="green"/></text>
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
                <p className="thomas" style={{ paddingLeft: "15px" }}>Thomas</p>
              </div>
              <div className="buble-chat">
                <Card>
                  <Card.Body>
                    <p className="isi-chat">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </Card.Body>
                </Card>
              </div>
              <div style={{ display: "flex" }}>
                <img
                  className="icon-chat"
                  src="https://cdn-icons-png.flaticon.com/512/206/206861.png"
                />
                <p className="thomas" style={{ paddingLeft: "15px" }}>Master Cat</p>
              </div>
              <div className="buble-chat">
                <Card>
                  <Card.Body>
                    <p className="isi-chat">orem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
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
                    <Card.Body>
                      {/* <AiOutlineSend/> */}
                    </Card.Body>
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
