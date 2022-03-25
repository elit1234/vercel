import dynamic from "next/dynamic";
import CartIcon from "./TopBar/CartIcon";
const DarkIcon = dynamic(() => import("./TopBar/DarkIcon"));
const MenuIcon = dynamic(() => import("./TopBar/MenuIcon"));
const SideBar = dynamic(() => import("./TopBar/SideBar"));

const Layout = ({ children }: any) => {
  return (
    <div className="layout-wrapper">
      <SideBar />
      <MenuIcon />
      <DarkIcon />
      <CartIcon />
      <div className="topNav-outer" />
      <div>{children && children}</div>
    </div>
  );
};

export default Layout;
