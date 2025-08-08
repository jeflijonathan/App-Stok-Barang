import clsx from "clsx";
import { Outlet } from "react-router-dom";

const LayoutApp = () => {
  return (
    <div className={clsx(`bg-[#1A2038] min-h-screen  flex justify-center items-center`)}>
      <Outlet />
    </div>
  );
};

export default LayoutApp;
