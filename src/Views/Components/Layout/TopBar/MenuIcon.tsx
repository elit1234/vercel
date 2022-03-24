import { useRef } from "react";
import toggleFunc from "./SideBar/toggleFunc";

const MenuIcon = () => {
  const firstLine = useRef<any>(null);
  const secondLine = useRef<any>(null);
  const thirdLine = useRef<any>(null);

  return (
    <div className="menuIcon-outer" onClick={() => toggleFunc()}>
      <div className="menuIcon-line firstLine" ref={firstLine}></div>
      <div className="menuIcon-line secondLine" ref={secondLine}></div>
      <div className="menuIcon-line thirdLine" ref={thirdLine}></div>
    </div>
  );
};

export default MenuIcon;
