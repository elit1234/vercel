import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";

const Footer = dynamic(() => import("../Components/Footer"));

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
        }
      });
    });

    const homeSectionTitle = document.querySelector(".home-sectionTitle")!;
    observer.observe(homeSectionTitle);
  }, []);
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Page description" />
        <meta itemProp="name" content="Item Name" />
        <meta itemProp="description" content="Item Description" />
        <meta itemProp="image" content="Image content" />
      </Head>
      <div className="home-Wrapper">
        <div className="home-Top">
          <div className="overlay-home topOverlay">
            <div className="home-sectionTitle">About Us</div>
            <div className="home-paragraph">
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Mauris vel eros cursus, malesuada diam
              dictum, volutpat nulla. Quisque in orci a lorem egestas maximus
              vitae sed nisl.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
