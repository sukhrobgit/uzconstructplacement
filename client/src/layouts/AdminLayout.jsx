import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import NavbarGen from "../components/NavbarGen";
import Footer from "../components/Footer";

function AdminLayout() {

  const userInfo = sessionStorage.getItem("userInfo")
  const data = JSON.parse(userInfo)

  const logoutHandler = async ()=>{
    await sessionStorage.clear()
    window.location.reload()
  }
  return (
    <div className="admin-layout">
      <div className="admin-layout__nav">
        <h1><Link to={'/home'}>UzConstruct</Link></h1>

        <ul>
          <li>
            <NavLink to={"projects"}>Current Projects</NavLink>
          </li>
          <li>
            <NavLink to={"portfolio"}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to={"users"}>Users</NavLink>
          </li>
        </ul>

        <Link  onClick={logoutHandler} to={"/home"} className="admin-layout__logout-btn">Logout</Link>
      </div>


<div className="admin-layout__main">
<div className="admin-layout__top">
        <h2>Admin Dashboard</h2>
        <h2>Welcome, {data.firstName}</h2>

      </div>
<div className="admin-layout__outlet">
      <Outlet />

</div>

</div>
  

    </div>
  );
}

export default AdminLayout;
