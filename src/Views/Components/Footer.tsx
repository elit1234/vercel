import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Footer = () => {
  const router = useRouter();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
        }
      });
    });

    const topButton = document.querySelector(".footer-topPartButton")!;
    observer.observe(topButton);
  }, []);

  const clickedGetStarted = () => {
    const topButton = document.querySelector(".footer-topPartButton")!;

    topButton.classList.add("clicked");
    setTimeout(() => {
      if (router.pathname !== "/about") router.push("/about");
      else router.push("/store");
    }, 950);
  };

  const clickedFacebook = () => {
    window.open("https://www.facebook.com/paversdirect", "_ blank");
  };

  return (
    <div className="footer-wrapper">
      <div>Are you ready?</div>

      <h2>Let's get started</h2>
      <button
        className="footer-topPartButton"
        onClick={() => clickedGetStarted()}
      >
        Get started
      </button>
      <div className="footer-subOptions">
        <div className="footer-subOption">
          <Link href="/">Home</Link>
        </div>
        <div className="footer-subOption">
          <Link href="/about">About</Link>
        </div>
        <div className="footer-subOption">
          <Link href="/store">Our Store</Link>
        </div>
      </div>
      <div className="footer-socials">
        <div className="footer-social">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => clickedFacebook()}
          >
            <title>Facebook</title>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
