import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
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

    const aboutLandingText = document.querySelector(".about-landingText")!;
    observer.observe(aboutLandingText);
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
      <div className="about-Wrapper">
        <div className="about-landingOverlay">
          <div className="about-landingText">About Us</div>
        </div>
        <Image
          src="/img/home-top.webp"
          alt="Top Picture"
          layout="fill"
          objectFit="cover"
          className="about-landingImage"
          quality={100}
          priority={true}
        />
      </div>
      <Footer />
    </>
  );
}
