import dynamic from "next/dynamic";
import CartIcon from "./TopBar/CartIcon";
import HomeIcon from "./TopBar/HomeIcon";
const DarkIcon = dynamic(() => import("./TopBar/DarkIcon"));
const MenuIcon = dynamic(() => import("./TopBar/MenuIcon"));
const SideBar = dynamic(() => import("./TopBar/SideBar"));

const Layout = ({ children }: any) => {
  return (
    <div className="layout-wrapper">
      <SideBar />
      <MenuIcon />
      <DarkIcon />
      <HomeIcon />
      <CartIcon />
      <div className="topNav-outer" />
      <div className="topBarName">Biz Name</div>
      <div>{children && children}</div>
    </div>
  );
};

export default Layout;
