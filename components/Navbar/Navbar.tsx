import Image from "next/image";
import { Drawer } from "../Drawer/Drawer";
import { useState } from "react";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div>
      <header className="p-4 dark:bg-white dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          {/* <Drawer /> */}
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <Image src={`/logo.png`} width="100" height={100} alt="logo" />
          </a>
          <div className="flex items-center md:space-x-4">
            <div className="relative">
              <div className="search-container">
                {isSearchOpen || (
                  <svg
                    id="search-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 10 500 500"
                    width="24"
                    height="24"
                    onClick={toggleSearch}
                    style={{ cursor: "pointer" }}
                    className="mx-0"
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                )}
                {isSearchOpen && (
                  <form className="search-form">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="text-black"
                    />
                    <button type="submit" className="text-black">
                      Go
                    </button>
                  </form>
                )}
              </div>
            </div>
            <button
              type="button"
              className="hidden px-6 py-2 font-semibold rounded-lg lg:block dark:bg-gray-900 dark:text-white"
            >
              Log in
            </button>
          </div>
          <button title="Open menu" type="button" className="sm:p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
