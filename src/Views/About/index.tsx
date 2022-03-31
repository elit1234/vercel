import dynamic from "next/dynamic";
import Head from "next/head";

const Footer = dynamic(() => import("../Components/Footer"));

export default function About() {
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
