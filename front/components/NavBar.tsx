import React, { useState } from "react";
import * as Icon from "react-feather";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  getPreferredLanguageCookie,
  setPreferredLanguageCookie,
} from "@/utils/confLanguage";

const NavBar = () => {
  const [isSearched, setIsSearched] = useState(false);
  const [isMenu, setMenu] = useState(false);

  const [serchKey, setSerchKey] = useState("");
  const router = useRouter();

  const serchChangeHandler = (e: any) => {
    const value = e.target.value;
    setSerchKey(value);
  };

  const getSearch = (e: any) => {
    e.preventDefault();
    if (serchKey.length !== 0) {
      router.push(`/search?q=${serchKey}`);
      setIsSearched(false);
    }
  };

  // change language

  const langHandler = (lang: string) => {
    setPreferredLanguageCookie(lang);
    router.reload();
  };

  console.log(getPreferredLanguageCookie());
  return (
    <nav className="shadow-md">
      <div className="border-b-[.01rem] border-b-varyLightGray">
        <div className="container relative space-x-3 mx-auto py-4 px-4 lg:px-0">
          <div className="flex items-center justify-between">
            {/* LOGO  */}
            <div className="">
              <Link href={"/"}>
                <img src="img/logo.png" className="w-[8rem]" alt="" />
              </Link>
            </div>
            {/* Search bar */}
            <div className="hidden max-w-md md:flex">
              <form onSubmit={getSearch}>
                <div className="flex md:w-[25rem] lg:w-[30rem]">
                  <input
                    type="text"
                    className="flex-1 px-4 py-[.4rem] rounded-l-md bg-veryLightGray focus:outline-none outline-none"
                    placeholder="Search here"
                    onChange={serchChangeHandler}
                  />
                  <button
                    onClick={getSearch}
                    className="px-4 py-[.4rem] text-sm rounded-r-md focus:outline-none bg-veryLightGray"
                  >
                    <Icon.Search className="h-5" strokeWidth={1} />
                  </button>
                </div>
              </form>
            </div>
            {/* Icons */}
            <div className="flex flex-row space-x-2 md:space-x-4">
              <button
                className="md:hidden p-2 bg-veryLightGray rounded-full"
                onClick={() => setIsSearched(!isSearched)}
              >
                <Icon.Search className="h-4 w-[16px]" strokeWidth={1} />
              </button>
              <div className="nav-col relative">
                <a href="#" className="bg-veryLightGray p-2 rounded-full flex">
                  <Icon.MessageSquare
                    className="h-4 w-[16px] md:w-[20px] md:h-5"
                    strokeWidth={1}
                  />
                </a>
                <div className="nav-col-item max-w-sm w-40 md:w-52 text-center space-y-3 absolute p-4 mt-3 flex flex-col bg-exLightGray rounded-md">
                  <a href="#">+251-994/+251-980</a>
                  <a href="#">994-ethionet.et</a>
                </div>
              </div>
              <div className="nav-col relative">
                <a href="#" className="bg-veryLightGray p-2 rounded-full flex">
                  <Icon.Download
                    className="h-4 w-[16px] md:w-[20px] md:h-5"
                    strokeWidth={1}
                  />
                </a>
                <div className="nav-col-item max-w-sm w-28 text-center space-y-3 absolute p-4 mt-3 flex flex-col bg-exLightGray rounded-md">
                  <a href="#">Android</a>
                  <a href="#">IOS</a>
                </div>
              </div>
              <a href="#" className="bg-veryLightGray p-2 rounded-full">
                <Icon.Sun
                  className="h-4 w-[16px] md:w-[20px] md:h-5"
                  strokeWidth={1}
                />
              </a>
              <div className="nav-col relative hidden md:flex">
                <a href="#" className="bg-veryLightGray p-2 rounded-full flex">
                  <Icon.Globe
                    className="h-4 w-[16px] md:w-[20px] md:h-5"
                    strokeWidth={1}
                  />
                </a>
                <div className="nav-col-item max-w-sm w-28 text-center space-y-3 absolute p-4 mt-3 flex flex-col bg-exLightGray rounded-md">
                  <button onClick={() => langHandler("eng")}>English</button>
                  <button onClick={() => langHandler("am")}>Amharic</button>
                </div>
              </div>
              <button
                className="flex bg-veryLightGray p-2 rounded-full lg:hidden"
                onClick={() => setMenu(!isMenu)}
              >
                <Icon.Menu
                  className="h-4 w-[16px] md:w-[20px] md:h-5"
                  strokeWidth={1}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Extended navbar */}
      <div className="container relative hidden flex-col justify-between text-center mx-auto px-4 lg:flex md:flex-row lg:px-0">
        <div className="relative coll-group">
          <a
            href=""
            className="coll px-4 py-2 flex flex-row items-center text-sm lg:px-0 hover:text-darkGrayishBlue"
          >
            telebirr
          </a>
        </div>
        <div className="relative coll-group">
          <a
            href=""
            className="coll px-4 py-2 flex flex-row items-center text-sm lg:px-0 hover:text-darkGrayishBlue"
          >
            Cloud Solution
            <span className="px-[.2rem]">
              <Icon.ChevronDown className="h-[1rem] pt-1" strokeWidth={1} />
            </span>
          </a>
          <div className="coll-item max-w-sm w-[15rem] text-left space-y-3 absolute p-4 mt-2 flex flex-col bg-exLightGray rounded-md">
            <a href="#">telecloud</a>
            <a href="#">Partnership cloud solutions</a>
          </div>
        </div>
        <div className="relative coll-group">
          <a
            href=""
            className="coll px-4 py-2 flex flex-row items-center text-sm lg:px-0 hover:text-darkGrayishBlue"
          >
            Online Services
            <span className="px-[.2rem]">
              <Icon.ChevronDown className="h-[1rem] pt-1" strokeWidth={1} />
            </span>
          </a>
          <div className="coll-item max-w-sm w-[15rem] text-left space-y-3 absolute p-4 mt-2 flex flex-col bg-exLightGray rounded-md">
            <a href="#">telegebeya</a>
            <a href="#">Online service request</a>
            <a href="#">eCare</a>
            <a href="#">DNS and webhosting</a>
          </div>
        </div>
        <div className="relative coll-group">
          <a
            href=""
            className="coll px-4 py-2 flex flex-row items-center text-sm lg:px-0 hover:text-darkGrayishBlue"
          >
            Personal
            <span className="px-[.2rem]">
              <Icon.ChevronDown className="h-[1rem] pt-1" strokeWidth={1} />
            </span>
          </a>
          <div className="coll-item max-w-sm w-[15rem] text-left space-y-3 absolute p-4 mt-2 flex flex-col bg-exLightGray rounded-md">
            <a href="#">Geting Started</a>
            <a href="#">Partnership cloud solutions</a>
          </div>
        </div>
        <div className="relative coll-group">
          <a
            href=""
            className="coll px-4 py-2 flex flex-row items-center text-sm lg:px-0 hover:text-darkGrayishBlue"
          >
            Bussiness
            <span className="px-[.2rem]">
              <Icon.ChevronDown className="h-[1rem] pt-1" strokeWidth={1} />
            </span>
          </a>
          <div className="coll-item max-w-sm w-[15rem] text-left space-y-3 absolute p-4 mt-2 flex flex-col bg-exLightGray rounded-md">
            <a href="#">telecloud</a>
            <a href="#">Partnership cloud solutions</a>
          </div>
        </div>
        <div className="relative coll-group">
          <a
            href=""
            className="coll px-4 py-2 flex flex-row items-center text-sm lg:px-0 hover:text-darkGrayishBlue"
          >
            International
            <span className="px-[.2rem]">
              <Icon.ChevronDown className="h-[1rem] pt-1" strokeWidth={1} />
            </span>
          </a>
          <div className="coll-item max-w-sm w-[15rem] text-left space-y-3 absolute p-4 mt-2 flex flex-col bg-exLightGray rounded-md">
            <a href="#">telecloud</a>

            <a href="#">Partnership cloud solutions</a>
          </div>
        </div>
        <div className="relative coll-group">
          <a
            href=""
            className="coll px-4 py-2 flex flex-row items-center text-sm lg:px-0 hover:text-darkGrayishBlue"
          >
            CustomerService
            <span className="px-[.2rem]">
              <Icon.ChevronDown className="h-[1rem] pt-1" strokeWidth={1} />
            </span>
          </a>
          <div className="coll-item max-w-sm w-[15rem] text-left space-y-3 absolute p-4 mt-2 flex flex-col bg-exLightGray rounded-md">
            <a href="#">telecloud</a>
            <a href="#">Partnership cloud solutions</a>
          </div>
        </div>
        <div className="relative coll-group">
          <a
            href=""
            className="coll px-4 py-2 flex flex-row items-center text-sm lg:px-0 hover:text-darkGrayishBlue"
          >
            Company
            <span className="px-[.2rem]">
              <Icon.ChevronDown className="h-[1rem] pt-1" strokeWidth={1} />
            </span>
          </a>
          <div className="coll-item max-w-sm w-[10rem] text-left space-y-3 absolute p-4 mt-2 flex flex-col bg-exLightGray rounded-md">
            <a href="#">telecloud</a>
            <a href="#">Partnership cloud solutions</a>
          </div>
        </div>
      </div>
      {/* min search bar */}
      {isSearched && (
        <div
          className="mx-auto w-[100%] absolute p-4 items-right
        "
        >
          <form onSubmit={getSearch}>
            <div className="flex flex-row mx-auto md:w-[25rem] lg:w-[30rem]">
              <input
                type="text"
                className="flex-1 px-4 py-[.4rem] rounded-l-md bg-veryLightGray focus:outline-none outline-none"
                placeholder="Search here"
                onChange={serchChangeHandler}
              />
              <button
                onClick={getSearch}
                className="px-4 py-[.4rem] text-sm rounded-r-md focus:outline-none bg-veryLightGray"
              >
                <Icon.Search className="h-5" strokeWidth={1} />
              </button>
            </div>
          </form>
        </div>
      )}
      {/* min menu */}
      {isMenu && (
        <div className="container absolute items-center justify-center text-center flex-col mx-auto w-[100%] px-4 bg-exLightGray mt-2 space-y-2">
          <div className="relative coll-group">
            <a
              href=""
              className="coll px-4 py-2 flex flex-row items-center text-sm lg:px-0 hover:text-darkGrayishBlue"
            >
              telebirr
            </a>
          </div>
          <div className="relative coll-group">
            <a
              href=""
              className="coll px-4 py-2 flex flex-row items-center text-sm lg:px-0 hover:text-darkGrayishBlue"
            >
              Cloud Solution
              <span className="px-[.2rem]">
                <Icon.ChevronDown className="h-[1rem] pt-1" strokeWidth={1} />
              </span>
            </a>
            <div className="coll-item max-w-sm w-[15rem] text-left space-y-3 absolute p-4 mt-2 flex flex-col bg-exLightGray rounded-md">
              <a href="#">telecloud</a>
              <a href="#">Partnership cloud solutions</a>
            </div>
          </div>
          <div className="relative coll-group">
            <a
              href=""
              className="coll px-4 py-2 flex flex-row items-center text-sm lg:px-0 hover:text-darkGrayishBlue"
            >
              Online Services
              <span className="px-[.2rem]">
                <Icon.ChevronDown className="h-[1rem] pt-1" strokeWidth={1} />
              </span>
            </a>
            <div className="coll-item max-w-sm w-[15rem] text-left space-y-3 absolute p-4 mt-2 flex flex-col bg-exLightGray rounded-md">
              <a href="#">telegebeya</a>
              <a href="#">Online service request</a>
              <a href="#">eCare</a>
              <a href="#">DNS and webhosting</a>
            </div>
          </div>
          <div className="relative coll-group">
            <a
              href=""
              className="coll px-4 py-2 flex flex-row items-center text-sm lg:px-0 hover:text-darkGrayishBlue"
            >
              Personal
              <span className="px-[.2rem]">
                <Icon.ChevronDown className="h-[1rem] pt-1" strokeWidth={1} />
              </span>
            </a>
            <div className="coll-item max-w-sm w-[15rem] text-left space-y-3 absolute p-4 mt-2 flex flex-col bg-exLightGray rounded-md">
              <a href="#">Geting Started</a>
              <a href="#">Partnership cloud solutions</a>
            </div>
          </div>
          <div className="relative coll-group">
            <a
              href=""
              className="coll px-4 py-2 flex flex-row items-center text-sm lg:px-0 hover:text-darkGrayishBlue"
            >
              Bussiness
              <span className="px-[.2rem]">
                <Icon.ChevronDown className="h-[1rem] pt-1" strokeWidth={1} />
              </span>
            </a>
            <div className="coll-item max-w-sm w-[15rem] text-left space-y-3 absolute p-4 mt-2 flex flex-col bg-exLightGray rounded-md">
              <a href="#">telecloud</a>
              <a href="#">Partnership cloud solutions</a>
            </div>
          </div>
          <div className="relative coll-group">
            <a
              href=""
              className="coll px-4 py-2 flex flex-row items-center text-sm lg:px-0 hover:text-darkGrayishBlue"
            >
              International
              <span className="px-[.2rem]">
                <Icon.ChevronDown className="h-[1rem] pt-1" strokeWidth={1} />
              </span>
            </a>
            <div className="coll-item max-w-sm w-[15rem] text-left space-y-3 absolute p-4 mt-2 flex flex-col bg-exLightGray rounded-md">
              <a href="#">telecloud</a>
              <a href="#">Partnership cloud solutions</a>
            </div>
          </div>
          <div className="relative coll-group">
            <a
              href=""
              className="coll px-4 py-2 flex flex-row items-center text-sm lg:px-0 hover:text-darkGrayishBlue"
            >
              CustomerService
              <span className="px-[.2rem]">
                <Icon.ChevronDown className="h-[1rem] pt-1" strokeWidth={1} />
              </span>
            </a>
            <div className="coll-item max-w-sm w-[15rem] text-left space-y-3 absolute p-4 mt-2 flex flex-col bg-exLightGray rounded-md">
              <a href="#">telecloud</a>
              <a href="#">Partnership cloud solutions</a>
            </div>
          </div>
          <div className="relative coll-group">
            <a
              href=""
              className="coll px-4 py-2 flex flex-row items-center text-sm lg:px-0 hover:text-darkGrayishBlue"
            >
              Company
              <span className="px-[.2rem]">
                <Icon.ChevronDown className="h-[1rem] pt-1" strokeWidth={1} />
              </span>
            </a>
            <div className="coll-item max-w-sm w-[10rem] text-left space-y-3 absolute p-4 mt-2 flex flex-col bg-exLightGray rounded-md">
              <a href="#">telecloud</a>
              <a href="#">Partnership cloud solutions</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
