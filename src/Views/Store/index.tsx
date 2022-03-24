import Head from "next/head";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../Components/Layout"));

export default function Store() {
  return (
    <Layout>
      <Head>
        <title>Store</title>
        <meta name="description" content="Page description" />
        <meta itemProp="name" content="Item Name" />
        <meta itemProp="description" content="Item Description" />
        <meta itemProp="image" content="Image content" />
      </Head>
      <div className="home-Wrapper">
        <div className="home-Top">
          <div className="overlay-home topOverlay">
            <div className="home-sectionTitle">Our Store</div>
            <div className="home-paragraph">
              Flawless LLC provides exceptional full-service house cleaning
              services for Chicago and the surround metro area. We can do
              everything from deep cleans to even dog walking and shopping and
              delivery!
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
