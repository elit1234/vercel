import { useRouter } from "next/router";
import Link from "next/link";
import toggleFunc from "./toggleFunc";

const SideBar = () => {
  const router = useRouter();
  const path = router.pathname;
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
    </div>
  );
};

export default SideBar;
