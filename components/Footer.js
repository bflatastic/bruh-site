import Image from "next/image";
import Link from "next/link";
import { Discord, Twitter } from "@icons-pack/react-simple-icons";
import OpenSea from "../public/svg/opensea.svg";
import moai from "../public/images/moai.png";

function Footer() {
  return (
    <div>
      <div className="w-full bg-black border-t border-opacity-10">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:px-10 lg:flex justify-between text-center lg:text-left">
          <div>
            <div className="lg:flex items-center justify-center">
              <div className="flex lg:object-contain items-center justify-center mb-4 lg:justify-left lg:mb-0">
                <div className="flex w-14 h-14 items-center">
                  <Image src={moai}></Image>
                </div>
              </div>
              <div className="lg:ml-5">
                <p className="font-black text-3xl">bruh.</p>
                <p className="text-lg font-normal">Bruh moment. Everytime.</p>
              </div>
            </div>
            <div>
              <p className="mt-10 text-gray-500 text-base">
                ©2021 BFlat. All rights reserved.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-6 lg:mt-0">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4 justify-center lg:justify-end">
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
              <Link href="https://etherscan.io" passHref>
                <a target="_blank" className="btn btn-primary">
                  Contract address
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
