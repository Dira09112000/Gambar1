import Grafik from "components/Grafik";
import SideBarKanan from "components/SideBarKanan";
import SideBarKiri from "components/SideBarKiri";
import Grafik2 from "components/Grafik2";
export const Dashboard = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", }}>
        <div>
          <SideBarKiri />
        </div>

        <div style={{paddingLeft:"300px"}}>
          <Grafik />
          <Grafik2/>
        </div>

        <div>
          <SideBarKanan />
        </div>
      </div>
    </>
  );
};
