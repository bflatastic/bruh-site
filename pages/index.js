import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { Component, useRef } from "react";
import Header from "../components/Header";
import Fade from "react-reveal/Fade";
import { MailOpenIcon } from "@heroicons/react/outline";
import moai from "../public/images/moai.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
      <div className="fixed top-0 z-50 w-full">
        <Header />
      </div>

      {/* Hero */}

      <main id="home" data-scroll-section>
        <div>
          <div className="wrapper pt-32 lg:pt-44">
            <div className="text-center lg:text-left lg:py-20 grid grid-cols-2 gap-4">
              <Fade bottom distance="20px">
                <div className="w-full h-full order-last col-span-2 lg:order-first lg:col-span-1 max-w-xs md:max-w-md xl:max-w-none mx-auto lg:mx-0">
                  <h1>Bruh moment. Everytime.</h1>
                  <p className="mt-4 lg:max-w-md subheader">
                    This site is random and useless I don't even know why I
                    created it. How are you?
                  </p>
                  <button className="btn btn-lg btn-primary mt-6 mx-auto lg:mx-0">
                    Let's Bruh
                  </button>
                </div>
                <div className="w-full col-span-2 lg:col-span-1 mx-auto items-center flex justify-center">
                  <div className="flex justify-center w-52 lg:absolute lg:w-80 xl:w-96">
                    <Image src={moai} />
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div id="context">
          <div className="wrapper pt-32">
            <div className="grid grid-cols-3 gap-10">
              <div className="flex items-center col-span-3 lg:col-span-1">
                <Fade left distance="20px">
                  <div className="space-y-4  ">
                    <h2>Never ask “What’s the context?” again</h2>
                    <p className="subheader">
                      Stale wikis aren't helpful. Neither are floating docs. In
                      Website, your daily work and knowledge live side by side —
                      so you never lose context.
                    </p>
                  </div>
                </Fade>
              </div>
              <Fade right distance="20px">
                <div className="col-span-3 lg:col-span-2"></div>
              </Fade>
            </div>
          </div>
        </div>
        <div>
          <div className="wrapper pt-20">
            <div className="grid grid-cols-3 gap-10">
              <div className="flex items-center col-span-3 lg:col-span-1">
                <Fade left distance="20px">
                  <div className="space-y-4  ">
                    <h2>Benefit from a global ecosystem of creators</h2>
                    <p className="subheader">
                      Get inspiration from thousands of community-made
                      templates, integrations, and events. You'll never want for
                      resources or support.
                    </p>
                  </div>
                </Fade>
              </div>
              <Fade right distance="20px">
                <div className="col-span-3 lg:col-span-2"></div>
              </Fade>
            </div>
          </div>
        </div>
        <div>
          <div className="wrapper pt-20">
            <div className="grid grid-cols-3 gap-10">
              <div className="flex items-center col-span-3 lg:col-span-1">
                <Fade left distance="20px">
                  <div className="space-y-4  ">
                    <h2>Benefit from a global ecosystem of creators</h2>
                    <p className="subheader">
                      Get inspiration from thousands of community-made
                      templates, integrations, and events. You'll never want for
                      resources or support.
                    </p>
                  </div>
                </Fade>
              </div>
              <Fade right distance="20px">
                <div className="col-span-3 lg:col-span-2"></div>
              </Fade>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
