import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";

function Layout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Navbar */}
      <div style={{ marginBottom:"0.5rem" }}>
        <Navbar />
      </div>

      {/* Main Content */}
      <div
      class="mt-5"
        style={{
          backgroundColor: "#f5f5f5",
        
       
          flexGrow: 1,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
