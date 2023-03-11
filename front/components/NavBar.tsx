import React from "react";

const NavBar = () => {
  return (
    <nav class="shadow-md">
      <div class="border-b-[.01rem] border-b-varyLightGray">
        <div class="container relative space-x-3 mx-auto py-4 px-4 lg:px-0">
          <div class="flex items-center justify-between">
            {/* LOGO  */}
            <div class="">
              <img src="src/img/logo.png" class="w-[8rem]" alt="" />
            </div>

            {/* SEARCH BAR  */}
            <div class="hidden max-w-md md:flex">
              <form>
                <div class="flex md:w-[25rem] lg:w-[30rem]">
                  <input
                    type="text"
                    class="flex-1 px-4 py-[.4rem] rounded-l-md bg-veryLightGray focus:outline-none outline-none"
                    placeholder="Search here"
                  />
                  <button class="px-4 py-[.4rem] text-sm rounded-r-md focus:outline-none bg-veryLightGray">
                    <img src="src/img/search.svg" alt="" class="h-5" />
                  </button>
                </div>
              </form>
            </div>

            {/* ICONS  */}

            <div class="flex flex-row space-x-2 md:space-x-4">
              <a href="#" class="md:hidden p-2 bg-veryLightGray rounded-full">
                <img src="src/img/search.svg" alt="" class="h-4" />
              </a>
              <a href="#" class="bg-veryLightGray p-2 rounded-full">
                <img
                  src="src/img/message-square.svg"
                  alt=""
                  class="h-4 md:h-5"
                />
              </a>
              <a href="#" class="bg-veryLightGray p-2 rounded-full">
                <img
                  src="src/img/download-cloud.svg"
                  alt=""
                  class="h-4 md:h-5"
                />
              </a>
              <a href="#" class="bg-veryLightGray p-2 rounded-full">
                <img
                  src="src/img/sun.svg"
                  alt=""
                  class="h-4 stroke-width-1 md:h-5"
                />
              </a>
              <a href="#" class="hidden bg-veryLigh">
                <img
                  class="h-4 stroke-width-1 md:h-5"
                  src="src/img/globe.svg"
                  alt=""
                />
              </a>
              <a
                href="#"
                class="flex bg-veryLightGray p-2 rounded-full lg:hidden"
              >
                <img
                  src="src/img/menu.svg"
                  alt=""
                  class="h-4 stroke-width-1 md:h-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container relative hidden flex-col justify-between text-center mx-auto px-4 lg:flex md:flex-row lg:px-0">
        <a href="" class="px-4 py-2 flex flex-row items-center text-sm lg:px-0">
          telebirr
        </a>
        <div class="relative">
          <a
            href=""
            class="coll px-4 py-2 flex flex-row items-center text-sm lg:px-0 hover:text-darkGrayishBlue"
          >
            Cloud Solution
            <span class="px-[.2rem]">
              <img
                src="src/img/chevron-down.svg"
                class="h-[1rem] pt-1"
                alt=""
              />
            </span>
          </a>
          <div class="coll-item max-w-sm w-[15rem] text-left space-y-3 absolute p-4 mt-2 flex flex-col bg-veryLightGray rounded-md">
            <a href="#">telecloud</a>
            <a href="#">Partnership cloud solutions</a>
          </div>
        </div>
        <a href="" class="px-4 py-2 flex flex-row items-center text-sm lg:px-0">
          Online Service
          <span class="px-[.2rem]">
            <img src="src/img/chevron-down.svg" class="h-[1rem] pt-1" alt="" />
          </span>
        </a>
        <a href="" class="px-4 py-2 flex flex-row items-center text-sm lg:px-0">
          Personal
          <span class="px-[.2rem]">
            <img src="src/img/chevron-down.svg" class="h-[1rem] pt-1" alt="" />
          </span>
        </a>
        <a href="" class="px-4 py-2 flex flex-row items-center text-sm lg:px-0">
          Bussines
          <span class="px-[.2rem]">
            <img src="src/img/chevron-down.svg" class="h-[1rem] pt-1" alt="" />
          </span>
        </a>
        <a href="" class="px-4 py-2 flex flex-row items-center text-sm lg:px-0">
          International
          <span class="px-[.2rem]">
            <img src="src/img/chevron-down.svg" class="h-[1rem] pt-1" alt="" />
          </span>
        </a>
        <a href="" class="px-4 py-2 flex flex-row items-center text-sm lg:px-0">
          Custumor Service
          <span class="px-[.2rem]">
            <img src="src/img/chevron-down.svg" class="h-[1rem] pt-1" alt="" />
          </span>
        </a>
        <a href="" class="px-4 py-2 flex flex-row items-center text-sm lg:px-0">
          Company
          <span class="px-[.2rem]">
            <img src="src/img/chevron-down.svg" class="h-[1rem] pt-1" alt="" />
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
