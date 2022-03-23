import { useRef } from "react";

const MenuIcon = () => {
  const firstLine = useRef<any>(null);
  const secondLine = useRef<any>(null);
  const thirdLine = useRef<any>(null);

  const clicked = () => {
    const isActive = firstLine.current.classList.contains("checked");
    const sidebarWrapper: HTMLElement =
      document.querySelector(".sidebarWrapper")!;
    sidebarWrapper.style.width = isActive ? "0" : "100%";
    firstLine.current.classList.toggle("checked");
    secondLine.current.classList.toggle("checked");
    thirdLine.current.classList.toggle("checked");
  };
  return (
    <div className="menuIcon-outer" onClick={() => clicked()}>
      <div className="menuIcon-line firstLine" ref={firstLine}></div>
      <div className="menuIcon-line secondLine" ref={secondLine}></div>
      <div className="menuIcon-line thirdLine" ref={thirdLine}></div>
    </div>
  );
};

export default MenuIcon;
