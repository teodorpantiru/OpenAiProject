import React from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="bg-gray-100 h-full">
      <Outlet />
    </div>
  );
}

export default AppLayout;
