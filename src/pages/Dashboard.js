import Grafik from "components/Grafik";
import SideBarKanan from "components/SideBarKanan";
import SideBarKiri from "components/SideBarKiri";
export const Dashboard = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <SideBarKiri />
        </div>

        <div style={{paddingLeft:"300px"}}>
          <Grafik />
        </div>

        <div>
          <SideBarKanan />
        </div>
      </div>
    </>
  );
};
