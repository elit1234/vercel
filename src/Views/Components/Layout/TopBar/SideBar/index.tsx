import { useRouter } from "next/router";
import Link from "next/link";

const SideBar = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <div className="sidebarWrapper">
      <Link href="/" passHref>
        <a
          className={path === "/" ? "sideBar-option active" : "sideBar-option"}
        >
          Home
        </a>
      </Link>
      <Link href="/about" passHref>
        <a
          className={
            path === "/about" ? "sideBar-option active" : "sideBar-option"
          }
        >
          About Us
        </a>
      </Link>
      <Link href="/store" passHref>
        <a
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
