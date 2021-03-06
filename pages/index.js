import { useState, useEffect } from "react";

import Head from "next/head";

import homeStyles from "../styles/Home.module.css";

/*Components*/
import Landing from "../components/Landing";
import About from "../components/About";
import Events from "../components/Events";
import Team from "../components/Team";
// import Blogs from "../components/Blogs";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Home() {
  const [title, setTitle] = useState("E-CELL");
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    addEventListener("resize", () => {
      if (window.innerWidth < 1000) {
        setTitle("E-CELL");
        setNavActive(false);
      } else {
        setTitle("ENTREPRENEURSHIP CELL VIT");
        setNavActive(true);
      }
    });
    addEventListener("load", () => {
      if (window.innerWidth < 1000) {
        setTitle("E-CELL");
        setNavActive(false);
      } else {
        setTitle("ENTREPRENEURSHIP CELL VIT");
        setNavActive(true);
      }
    });

    return () => {
      addEventListener("resize", () => {
        if (window.innerWidth < 1000) {
          setTitle("E-CELL");
          setNavActive(false);
        } else {
          setTitle("ENTREPRENEURSHIP CELL VIT");
          setNavActive(true);
        }
      });
      addEventListener("load", () => {
        if (window.innerWidth < 1000) {
          setTitle("E-CELL");
          setNavActive(false);
        } else {
          setTitle("ENTREPRENEURSHIP CELL VIT");
          setNavActive(true);
        }
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Entrepreneurship Cell VIT</title>
      </Head>

      <div className={homeStyles.container}>
        <Landing title={title} navActive={navActive} />
        <About />
        <Events />
        <Team />
        {/* <Blogs /> */}
        <Gallery />
        <Footer />
      </div>
    </>
  );
}
