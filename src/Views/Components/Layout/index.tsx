import dynamic from "next/dynamic";
const DarkIcon = dynamic(() => import("./TopBar/DarkIcon"));
const MenuIcon = dynamic(() => import("./TopBar/MenuIcon"));
const SideBar = dynamic(() => import("./TopBar/SideBar"));

const Layout = ({ children }: any) => {
  return (
    <div className="layout-wrapper">
      <SideBar />
      <MenuIcon />

      <DarkIcon />
      <div>{children && children}</div>
    </div>
  );
};

export default Layout;
