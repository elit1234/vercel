import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("../Components/Footer"));

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/about");
    router.prefetch("/store");
  }, [router]);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Page description" />
        <meta itemProp="name" content="Item Name" />
        <meta itemProp="description" content="Item Description" />
        <meta itemProp="image" content="Image content" />
      </Head>
      <div className="home-Wrapper">
        <div className="home-Top">
          <div className="overlay-home topOverlay">
            <div className="home-sectionTitle">Business Name Goes Here</div>
            <div className="home-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              faucibus id eros eget malesuada. Mauris cursus rhoncus fringilla.
              Etiam fringilla viverra lorem, a tincidunt libero tempor in. Donec
              ut odio at neque dictum dignissim.
            </div>
            <div
              className="home-blackButtonWrapper blackButtonOverlay"
              onClick={() => router.push("/store")}
            >
              <div className="blackButton home-blackButton">Shop Now</div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-firstServices">
        <div className="subColour home-firstService">
          <div className="home-firstServiceImageWrapper">
            <Image src="/img/service1.webp" layout="fill" alt="Service1" />
          </div>
          <div className="home-firstServiceTitle">Service Name</div>
          <div className="home-firstServiceDesc">
            Fusce tortor arcu, volutpat sed porta in, venenatis non augue.
            Integer at dui ac tellus mollis molestie vitae tempor est.
          </div>
        </div>
        <div className="subColour home-firstService">
          <div className="home-firstServiceImageWrapper">
            <Image src="/img/service2.webp" layout="fill" alt="Service2" />
          </div>
          <div className="home-firstServiceTitle">Service Name</div>
          <div className="home-firstServiceDesc">
            Fusce tortor arcu, volutpat sed porta in, venenatis non augue.
            Integer at dui ac tellus mollis molestie vitae tempor est.
          </div>
        </div>
        <div className="subColour home-firstService">
          <div className="home-firstServiceImageWrapper">
            <Image src="/img/service3.webp" layout="fill" alt="Service3" />
          </div>
          <div className="home-firstServiceTitle">Service Name</div>
          <div className="home-firstServiceDesc">
            Fusce tortor arcu, volutpat sed porta in, venenatis non augue.
            Integer at dui ac tellus mollis molestie vitae tempor est.
          </div>
        </div>
        <div className="subColour home-firstService">
          <div className="home-firstServiceImageWrapper">
            <Image src="/img/service4.webp" layout="fill" alt="Service4" />
          </div>
          <div className="home-firstServiceTitle">Service Name</div>
          <div className="home-firstServiceDesc">
            Fusce tortor arcu, volutpat sed porta in, venenatis non augue.
            Integer at dui ac tellus mollis molestie vitae tempor est.
          </div>
        </div>
      </div>
      <div
        className="home-blackButtonWrapper blackButtonOverlay"
        style={{ margin: "0 auto" }}
      >
        <div
          className="blackButton home-blackButton"
          onClick={() => router.push("/about")}
        >
          All Our Services
        </div>
      </div>

      <div className="home-dedicatedArea">
        <div className="home-dedicatedImage" />
        <div className="home-dedicatedRight">
          <div className="home-sectionBlueTitle">Dedicated to quality</div>
          <div className="home-sectionSubtitle">
            We don't cut corners, we clean them!
          </div>
          <div style={{ paddingTop: "2rem" }}>
            Flawless is located in Chicago serving the surrounding area with the
            highest quality residential and commercial cleaning at affordable
            and competitive rates. We have a full staff of hand-picked,
            certified, bonded, and insured professionals who treat your property
            with the same care as if it were our own.
          </div>
          <div style={{ paddingBottom: "2rem" }}>
            Flawless is located in Chicago serving the surrounding area with the
            highest quality residential and commercial cleaning at affordable
            and competitive rates. We have a full staff of hand-picked,
            certified, bonded, and insured professionals who treat your property
            with the same care as if it were our own.
          </div>
          <div
            className="blackButtonOverlay "
            style={{
              display: "grid",
              placeItems: "center",
              margin: "0 auto 4rem auto",
            }}
          >
            <div className="blackButton home-blackButton">More About Us</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
