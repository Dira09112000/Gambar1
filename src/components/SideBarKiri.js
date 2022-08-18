import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  IoWalletOutline,
  IoGridOutline,
  IoRepeat,
  IoNotificationsOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";
import {
  VscAccount,
  VscThreeBars,
  VscArrowRight,
  VscActivateBreakpoints,
} from "react-icons/vsc";
import { CgArrowsExchange } from "react-icons/cg";
import { BiSliderAlt } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { AiOutlinePicture } from "react-icons/ai";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "react-pro-sidebar/dist/css/styles.css";
import "../css/sidebarkiri.css";

const SideBarKiri = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader className="background">
            <div className="logotext" onClick={menuIconClick}>
              {menuCollapse ? (
                <VscThreeBars />
              ) : (
                <div className="text py-5">
                  <div className="font-trade">
                    <VscActivateBreakpoints />
                  </div>
                  <div className="font-trade">Trade</div>
                  <div className="font-mask">Mask</div>
                </div>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent className="background">
            <Menu iconShape="square">
              <MenuItem className="font-menu" icon={<VscAccount />}>
                Profile
              </MenuItem>
              <MenuItem
                className="active"
                active={true}
                icon={<IoGridOutline />}
              >
                <div className="font-white row">
                  <div className="col-10">Dashboard</div>
                  <div className="col-2">
                    <VscArrowRight />
                  </div>
                </div>
              </MenuItem>
              <MenuItem icon={<IoWalletOutline />}>Wallet</MenuItem>
              <MenuItem icon={<CgArrowsExchange />}>Trade</MenuItem>
              <MenuItem icon={<IoNotificationsOutline />}>
                <div className="row">
                  <div className="col-10">Notification</div>
                  <div
                    className="col-2"
                    style={{
                      borderRadius: "90px 90px 90px 90px",
                      width: "20px",
                      height: "20px",
                      background: "orange",
                      color: "white",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    4
                  </div>
                </div>
              </MenuItem>
              <MenuItem icon={<IoRepeat />}>Exchange</MenuItem>
            </Menu>
            <div className="">
              <div iconShape="square" className=" logotext">
                {menuCollapse ? (
                  <AiOutlinePicture />
                ) : (
                  <Card>
                    <div className="container-fluid">
                      <div className="container">
                        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSk4Ek9ZEBrZNq0cR9kAGpZ8GrA4k6usEpaebkDv3_p7OUbdtfq" />
                        {/* <Card.Body className='text-center'>
                                      <Card.Title className='font-card'>
                                          Explore a New Strategy
                                      </Card.Title>
                                      <Button>Try Now <VscArrowRight /></Button>
                                  </Card.Body> */}
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<IoInformationCircleOutline />}>
                <div className="row">
                  <div className="col-10">Information</div>
                  <div
                    className="col-2"
                    style={{
                      borderRadius: "90px 90px 90px 90px",
                      width: "20px",
                      height: "20px",
                      background: "orange",
                      color: "white",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    1
                  </div>
                </div>
              </MenuItem>
              <MenuItem icon={<BiSliderAlt />}>Account Settings</MenuItem>
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBarKiri;
