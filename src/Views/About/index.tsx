import Head from "next/head";

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
              Flawless LLC provides exceptional full-service house cleaning
              services for Chicago and the surround metro area. We can do
              everything from deep cleans to even dog walking and shopping and
              delivery!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
