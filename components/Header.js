import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import React, { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Discord, Twitter } from "@icons-pack/react-simple-icons";
import OpenSea from "../public/svg/opensea.svg";

const navigation = [
  { name: "Home", href: "#home", current: false },
  { name: "About", href: "#context", current: false },
  { name: "Resources", href: "#context", current: false },
  { name: "Download", href: "#context", current: false },
  { name: "Pricing", href: "#context", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  return (
    <Disclosure as="nav" className="relative">
      {({ open }) => (
        <div className="  h-14 sm:mx-0 xl:mx-auto xl:max-w-7xl md:mt-5 md:mx-10 xl:px-10 sm:mt-0">
          <div className="flex justify-between items-center h-full bg-dark-gray bg-opacity-70 px-5 border border-black backdrop-blur-sm saturate-150">
            {/* Left Nav */}
            <div className="flex w-full lg:w-auto justify-between lg:justify-start lg:space-x-5 items-center flex-wrap">
              {/* Logo */}
              <div>
                <Link href="http://localhost:3000/">
                  <a className="flex items-center space-x-4">
                    <div className="flex items-center justify-center">
                      <h1 className="text-3xl mt-1 ">bruh.</h1>
                    </div>
                  </a>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex lg:hidden outline-none focus:outline-none">
                <Disclosure.Button>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* NavBar Desktop */}
              <div className="hidden lg:flex lg:w-auto justify-center">
                <ul className="flex flex-col lg:flex-row lg:space-x-2">
                  {navigation.map((item) => (
                    <li key={item.name} href={item.href} data-scroll-to>
                      <Link href={item.href}>
                        <a
                          className={classNames(
                            item.current
                              ? "text-base2 font-semibold text-white text-opacity-50 px-2 py-1 hover:bg-white rounded transition-colors"
                              : "text-base2 font-semibold text-white text-opacity-50 px-2 py-1 hover:text-opacity-100 hover:bg-white hover:bg-opacity-5 rounded transition-colors"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Nav */}
            <div className="hidden lg:flex space-x-6">
              <div className="flex items-center space-x-4">
                <Link href="https://discord.gg">
                  <a className="hover:opacity-50 transition" target="_blank">
                    <Discord />
                  </a>
                </Link>
                <Link href="https://twitter.com">
                  <a className="hover:opacity-50 transition" target="_blank">
                    <Twitter />
                  </a>
                </Link>
                <Link href="https://opensea.io">
                  <a
                    className="hover:opacity-50 transition w-6 h-6"
                    target="_blank"
                  >
                    <Image src={OpenSea}></Image>
                  </a>
                </Link>
              </div>
              <button className="btn btn-primary ml-4">Connect Wallet</button>
            </div>
          </div>

          {/* NavBar Mobile */}
          <Disclosure.Panel>
            {({ close }) => (
              <div className="flex w-full lg:hidden text-center justify-center bg-dark-gray bg-opacity-90  border-b border-black backdrop-blur-sm saturate-150">
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opac  ity-0"
                >
                  <ul className="space-y-4 py-5">
                    {navigation.map((item) => (
                      <li
                        key={item.name + "Mobile"}
                        onClick={async () => {
                          close();
                        }}
                      >
                        <Link href={item.href}>
                          <a
                            className={classNames(
                              item.current
                                ? "text-base2 font-semibold text-white text-opacity-50 px-2 py-1 hover:text-opacity-100 hover:bg-white hover:bg-opacity-5 rounded transition-colors"
                                : "text-base2 font-semibold text-white text-opacity-50 px-2 py-1 hover:text-opacity-100 hover:bg-white hover:bg-opacity-5 rounded transition-colors"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col lg:hidden items-center justify-center mt-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <Link href="https://discord.gg">
                        <a
                          className="hover:opacity-50 transition"
                          target="_blank"
                        >
                          <Discord />
                        </a>
                      </Link>
                      <Link href="https://twitter.com">
                        <a
                          className="hover:opacity-50 transition"
                          target="_blank"
                        >
                          <Twitter />
                        </a>
                      </Link>
                      <Link href="https://opensea.io">
                        <a
                          className="hover:opacity-50 transition w-6 h-6"
                          target="_blank"
                        >
                          <Image src={OpenSea}></Image>
                        </a>
                      </Link>
                    </div>
                    <button className="btn btn-primary mb-6">
                      Connect Wallet
                    </button>
                  </div>
                </Transition>
              </div>
            )}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}

export default Header;
