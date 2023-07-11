import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./navigation/footer";
import Header from "./navigation/header";

function Layout(children) {
  return (
    <div className="h-full overflow-scroll">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
