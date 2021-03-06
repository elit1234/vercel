import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import toggleFunc from "./toggleFunc";
import { useEffect, useState } from "react";
import SidebarDark from "./SidebarDark";
import SidebarCart from "./SidebarCart";
import { useSelector } from "react-redux";

const DarkIcon = dynamic(() => import("../DarkIcon"));

const SideBar = () => {
  const router = useRouter();
  const user = useSelector((state: any) => state.user);
  const isAdmin = user && user.username && user.admin;
  const path = router.pathname;
  const [width, setWidth] = useState(
    typeof window === "undefined" ? 0 : window.innerWidth
  );

  const updateDimensions = () => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="sidebarWrapper">
      <Link href="/" passHref>
        <a
          onClick={() => toggleFunc()}
          className={path === "/" ? "sideBar-option active" : "sideBar-option"}
        >
          Home
        </a>
      </Link>
      <Link href="/about" passHref>
        <a
          onClick={() => toggleFunc()}
          className={
            path === "/about" ? "sideBar-option active" : "sideBar-option"
          }
        >
          About Us
        </a>
      </Link>
      <Link href="/store" passHref>
        <a
          onClick={() => toggleFunc()}
          className={
            path === "/store" ? "sideBar-option active" : "sideBar-option"
          }
        >
          Store
        </a>
      </Link>
      {isAdmin && (
        <Link href="/admin/home" passHref>
          <a
            onClick={() => toggleFunc()}
            className={
              path.startsWith("/admin")
                ? "sideBar-option active"
                : "sideBar-option"
            }
          >
            Admin
          </a>
        </Link>
      )}
      {width && width < 600 && <DarkIcon sideBar={true} />}
      {width && width < 600 && (
        <>
          <SidebarDark />
          <SidebarCart />
        </>
      )}
    </div>
  );
};

export default SideBar;
