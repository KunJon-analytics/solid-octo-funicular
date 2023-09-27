import Link from "next/link";
import React from "react";
import Image from "next/image";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import logo from "@/assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/#about"}>About</Link>
            </li>
            <li>
              Community
              <ul className="p-2">
                <li>
                  <Link href={"/"}>Telegram</Link>
                </li>
                <li>
                  <Link href={"https://twitter.com/black94263"} target="_blank">
                    Twitter
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"/#roadmap"}>Roadmap</Link>
            </li>
          </ul>
        </div>
        <Link
          href={"/"}
          className="btn btn-ghost normal-case text-sm lg:text-lg"
        >
          <Image
            src={logo}
            alt="BabyBlackRock Logo"
            className="h-20 w-24 lg:hidden mt-[-10px]"
          />
          <span className="hidden lg:flex">BabyBlackRock</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu z-20 menu-horizontal px-1">
          <li>
            <Link href={"/#about"}>About</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Community</summary>
              <ul className="p-2">
                <li>
                  <Link href={"https://twitter.com/black94263"} target="_blank">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>Telegram</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href={"/#roadmap"}>Roadmap</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ConnectButton />
      </div>
    </div>
  );
};

export default Navbar;
