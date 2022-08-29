import "../css/sidebarkanan.css";
import { FiSearch } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import { BsArrowUpRight, BsArrowDownRight, BsArrowRight } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
const SideBarKanan = () => {
  return (
    <>
      <div className="all">
        {/* Header */}
        <div className="container">
          <div
            style={{
              display: "flex",
              width: "50px",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <div>
              <FiSearch />
            </div>
            <div>
              <GrNotification />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{textAlign:"right"}}>
              <div style={{ fontWeight: "bold" }}>James Thompson</div>
              <div>@jmtson</div>
            </div>
            <div style={{ paddingLeft: "20px" }}>
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR3KXi8zloPbA_Ydq0MA_gLruJ6CV1At1kG6ehS2V7wc2sjunAU"
                width={35}
              ></img>
            </div>
          </div>
        </div>
        {/* End Header */}

        {/* Total Balance */}
        <div style={{ padding: "20" }}>
          <div style={{ fontWeight: "bold", fontSize: "30" }}>
            Total Balance
          </div>
          <div style={{ fontWeight: "bold", fontSize: "45" }}>$267,820,00</div>
          <div
            style={{
              display: "flex",
              width: "120",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "80",
                borderRadius: "10px",
                background: "#D8F5E6",
                justifyContent: "center",
                color: "green",
                fontWeight: "bold",
              }}
            >
              +8.29%
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "30",
                height: "30",
                borderRadius: "30px",
                background: "#27C364",
                color: "white",
              }}
            >
              <BsArrowUpRight />
            </div>
          </div>
        </div>
        {/* End Total Balance */}

        {/* My Items */}
        <div style={{ padding: "20px"}}>
          <div style={{ fontWeight: "bold", fontSize: "25" }}>My Items</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "20",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "150px",
              }}
            >
              <div className="kotakarrow1">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "20",
                    height: "20",
                    borderRadius: "30px",
                    background: "#EE78B3",
                    color: "white",
                  }}
                >
                  <BsArrowDownRight />
                </div>
              </div>
              <div style={{paddingRight:"10px"}}>
                <div>Investment</div>
                <div style={{ fontWeight: "bold" }}>87.2K</div>
                <div
                  style={{
                    display: "flex",
                    width: "65px",
                    borderRadius: "15px",
                    background: "#FDDAEA",
                    justifyContent: "center",
                    color: "#EE78B3",
                    fontWeight: "bold",
                  }}
                >
                  +50.4%
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "150",
                paddingLeft:"20px"
              }}
            >
              <div className="kotakarrow2">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "20",
                    height: "20",
                    borderRadius: "30px",
                    background: "#27C364",
                    color: "white",
                  }}
                >
                  <BsArrowUpRight />
                </div>
              </div>
              <div>
                <div>Cash Back</div>
                <div style={{ fontWeight: "bold" }}>19.5K</div>
                <div
                  style={{
                    display: "flex",
                    width: "65",
                    borderRadius: "15px",
                    background: "#D8F5E6",
                    justifyContent: "center",
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  +12.4%
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End My Items */}
        {/* Convert */}
        <div style={{ padding: "20" }}>
          <div
            style={{ fontWeight: "bold", fontSize: "25", paddingBottom: "20" }}
          >
            Convert
          </div>
          <div
            style={{
              display: "flex",
              background: "white",
              justifyContent: "space-between",
              borderRadius: "10px",
              height: "50px",
              alignItems: "center",
            }}
          >
            <div style={{ padding: "5", fontWeight: "bold" }}>$1000</div>
            <div
              style={{
                color: "orange",
                display: "flex",
                padding: "5",
                width: "80",
                height: "45",
                background: "#FFF6E9",
                borderRadius: "10px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>USD</div>
              <div>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
          <br />
          <div
            style={{
              display: "flex",
              background: "white",
              justifyContent: "space-between",
              borderRadius: "10px",
              height: "50px",
              alignItems: "center",
            }}
          >
            <div style={{ padding: "5", fontWeight: "bold" }}>0.3043432</div>
            <div
              style={{
                color: "blue",
                display: "flex",
                padding: "5",
                width: "80",
                height: "45",
                background: "#F1F1FE",
                borderRadius: "10px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>ETH</div>
              <div>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                width: "100",
                height: "50",
                background: "#6271EB",
                borderRadius: "10px",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Convert
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "right",
              }}
            >
              <text>1 USD = 0.00003 ETH (-1$)</text>
              <text>ETH BUSD</text>
            </div>
          </div>
        </div>
        {/* End Convert */}
        {/* kotak */}
        <div style={{ padding: "20" }}>
          <div
            style={{
              width: "100%",
              height: "280",
              background: "black",
              borderRadius: "20px",
              color: "white",
            }}
          >
            <div style={{ padding: "20", width: "150px" }}>
              <div style={{ fontWeight: "bold", fontSize: "20px" }}>
                Upgrade
              </div>
              <div style={{ fontWeight: "bold", fontSize: "20px" }}>
                Your Plan
              </div>
              <div style={{paddingTop:"150px"}}>
                Let's Go <BsArrowRight/>
              </div>
            </div>
          </div>
        </div>
        {/* end kotak */}
      </div>
    </>
  );
};

export default SideBarKanan;
