import "../styles/globals.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import React, { useRef } from "react";

function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null);
  const { scroll } = useLocomotiveScroll();
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        multiplier: 0.6,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <Component {...pageProps} />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default MyApp;
