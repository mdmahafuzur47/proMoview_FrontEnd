/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React, { SVGProps, useEffect, useState } from "react";
import Spinner from "../ui/Spinner";
import { useRouter } from "next/router";
import navLinks from "../../../public/data/navLinks";


const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  })

  const router = useRouter();
  const path = router?.asPath;
  const handleBoth = () => {
    setOpenNav(!openNav)
    setOpen(false)
  }
  return (
    <nav className="bg-white">
      {/* top navbar  */}
      <div className="border-b shadow-sm">
        <div className="container py-2 flex justify-center md:justify-between items-center">
          <div className="md:block hidden">
            <div className="flex items-center gap-3 ">
              <div className="flex text-sm font-semibold text-gray-800 gap-1">
                <Spinner />
                <h1>Trending</h1>
              </div>
              <p className="font-medium text-gray-600 text-sm">
                Download All movie 2024 online
              </p>
            </div>
          </div>
          {/* social Links  */}
         <div className="flex items-center gap-5">
         <div className="flex gap-3 font-semibold">
            <PhTelegramLogo />
            <PhYoutubeLogo />
            <TablerBrandTwitter />
            <UitFacebookF />
          </div>
          <Link href={"/dashboard"} className="btnGradient text-white font-medium text-sm px-4 py-[2px]  rounded-md">Add</Link>
         </div>
        </div>
      </div>
      {/* mobile icon view  */}
      <Link className="md:hidden flex justify-center py-2" href={"/"}>
        <img className="w-[220px] h-auto" src="/moview logo.png" alt="img" />
      </Link>
      {/* main navbar  */}
      <div className="container flex items-center justify-center navColorControl md:justify-between p-3 md:py-2 relative">
        <Link className="hidden md:block" href={"/"}>
          <img className="w-[220px] h-auto" src="/moview logo.png" alt="img" />
        </Link>

        <div className="flex gap-5 items-center">
          <div className="lg:block hidden">
            <ul className="flex gap-5">
              {navLinks?.map((links, index) => {
                return (
                  <>
                    <li className={`font-semibold relative text-gray-700 hover:text-[#FF4444] ${path === links?.path ? "text-[#FF4444]" : ""} `} key={index}>

                      {
                        links?.children ? (<div onMouseEnter={() => setOpen(!open)} className="flex items-center gap-1 hover:text-[#FF4444]">
                          <Link href={links.path}>{links.name}</Link>
                          <MaterialSymbolsArrowDropDown />
                        </div>) : (<Link href={links.path}>{links.name}</Link>)
                      }
                      {
                        open && links?.children && (
                          <ul onMouseLeave={() => setOpen(!open)} className="flex flex-col absolute top-10 pl-3 pr-16 left-0 gap-3 py-3 rounded-sm bg-white z-[99] shadow-md">
                            {links?.children?.map((links, index) => {
                              return (
                                <>
                                  <li key={index} className={`font-medium   text-gray-700 hover:text-[#FF4444]`} >
                                    <Link href={`/movies/Genre-` + links.title}>{links.title}</Link>
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                        )
                      }
                    </li>

                  </>
                );
              })}
            </ul>
          </div>

          {/* mobile view navbar  */}
          {
            openNav && <div className="absolute bg-gray-50 z-[9999] top-[61px] right-0 lg:hidden">
              <ul className="flex p-5 flex-col gap-5">
                {navLinks?.map((links, index) => {
                  return (
                    <>
                      <li className={`font-semibold  text-gray-700 hover:text-[#FF4444] ${path === links?.path ? "text-[#FF4444]" : ""} `} key={index}>

                        {
                          links?.children ? (<div onClick={() => setOpen(!open)} className="flex items-center gap-1 hover:text-[#FF4444]">
                            <Link href={links.path}>{links.name}</Link>
                            <MaterialSymbolsArrowDropDown />
                          </div>) : (<div onClick={() => setOpenNav(!openNav)}>
                            <Link href={links.path}>{links.name}</Link>
                          </div>)
                        }
                        {
                          open && links?.children && (
                            <ul className="flex flex-col absolute top-10 pl-3 pr-16 right-[150px] gap-3 py-3 rounded-sm bg-white z-[99] shadow-md">
                              {links?.children?.map((links, index) => {
                                return (
                                  <>
                                    <li onClick={handleBoth} key={index} className={`font-medium   text-gray-700 hover:text-[#FF4444]`} >
                                      <Link href={`/movies/Genre-` + links.title}>{links.title}</Link>
                                    </li>
                                  </>
                                );
                              })}
                            </ul>
                          )
                        }
                      </li>

                    </>
                  );
                })}
              </ul>
            </div>
          }

          {/* mobile view navbar end  */}

          <div>
            <div className="border px-5 py-[6px] rounded-2xl flex items-center cursor-pointer bg-white">
              <input
                className="outline-none md:w-[200px] w-[150px]"
                type="text"
                placeholder="Search..."
              />
              <IcBaselineSearch />
            </div>
          </div>
          {/* menu icon  */}
          <div onClick={handleBoth} className="lg:hidden p-[6px] text-xl btnGradient text-white rounded-md">
            {
              openNav ? <MaterialSymbolsCloseSmall /> : <MaterialSymbolsListsRounded />
            }
          </div>
        </div>

      </div>
      {
        !scrolling ? "" : (<div className="fixed top-0 left-0 w-full h-auto bg-white z-[999] shadow-md">
          <div className="container flex items-center justify-center navColorControl md:justify-between p-3 md:py-2 relative">
            <Link className="hidden md:block" href={"/"}>
              <img className="w-[220px] h-auto" src="/moview logo.png" alt="img" />
            </Link>

            <div className="flex gap-5 items-center">
              <div className="lg:block hidden">
                <ul className="flex gap-5">
                  {navLinks?.map((links, index) => {
                    return (
                      <>
                        <li className={`font-semibold relative text-gray-700 hover:text-[#FF4444] ${path === links?.path ? "text-[#FF4444]" : ""} `} key={index}>

                          {
                            links?.children ? (<div onMouseEnter={() => setOpen(!open)} className="flex items-center gap-1 hover:text-[#FF4444]">
                              <Link href={links.path}>{links.name}</Link>
                              <MaterialSymbolsArrowDropDown />
                            </div>) : (<Link href={links.path}>{links.name}</Link>)
                          }
                          {
                            open && links?.children && (
                              <ul onMouseLeave={() => setOpen(!open)} className="flex flex-col absolute top-10 pl-3 pr-16 left-0 gap-3 py-3 rounded-sm bg-white z-[99] shadow-md">
                                {links?.children?.map((links, index) => {
                                  return (
                                    <>
                                      <li key={index} className={`font-medium   text-gray-700 hover:text-[#FF4444]`} >
                                        <Link href={`/movies/Genre-` + links.title}>{links.title}</Link>
                                      </li>
                                    </>
                                  );
                                })}
                              </ul>
                            )
                          }
                        </li>

                      </>
                    );
                  })}
                </ul>
              </div>

              {/* mobile view navbar  */}
              {
                openNav && <div className="absolute bg-gray-50 z-[9999] top-[61px] right-0 lg:hidden">
                  <ul className="flex p-5 flex-col gap-5">
                    {navLinks?.map((links, index) => {
                      return (
                        <>
                          <li className={`font-semibold  text-gray-700 hover:text-[#FF4444] ${path === links?.path ? "text-[#FF4444]" : ""} `} key={index}>

                            {
                              links?.children ? (<div onClick={() => setOpen(!open)} className="flex items-center gap-1 hover:text-[#FF4444]">
                                <Link href={links.path}>{links.name}</Link>
                                <MaterialSymbolsArrowDropDown />
                              </div>) : (<div onClick={() => setOpenNav(!openNav)}>
                                <Link href={links.path}>{links.name}</Link>
                              </div>)
                            }
                            {
                              open && links?.children && (
                                <ul className="flex flex-col absolute top-10 pl-3 pr-16 right-[150px] gap-3 py-3 rounded-sm bg-white z-[99] shadow-md">
                                  {links?.children?.map((links, index) => {
                                    return (
                                      <>
                                        <li onClick={handleBoth} key={index} className={`font-medium   text-gray-700 hover:text-[#FF4444]`} >
                                          <Link href={`/movies/Genre-` + links.title}>{links.title}</Link>
                                        </li>
                                      </>
                                    );
                                  })}
                                </ul>
                              )
                            }
                          </li>

                        </>
                      );
                    })}
                  </ul>
                </div>
              }

              {/* mobile view navbar end  */}

              <div>
                <div className="border px-5 py-[6px] rounded-2xl flex items-center cursor-pointer bg-white">
                  <input
                    className="outline-none md:w-[200px] w-[150px]"
                    type="text"
                    placeholder="Search..."
                  />
                  <IcBaselineSearch />
                </div>
              </div>
              {/* menu icon  */}
              <div onClick={handleBoth} className="lg:hidden p-[6px] text-xl btnGradient text-white rounded-md">
                {
                  openNav ? <MaterialSymbolsCloseSmall /> : <MaterialSymbolsListsRounded />
                }
              </div>
            </div>

          </div>
        </div>)
      }


    </nav>
  );
};

export default Navbar;



export function MaterialSymbolsCloseSmall(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m8.382 17.025l-1.407-1.4L10.593 12L6.975 8.4L8.382 7L12 10.615L15.593 7L17 8.4L13.382 12L17 15.625l-1.407 1.4L12 13.41z"></path></svg>
  )
}


export function MaterialSymbolsListsRounded(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M10 20q-.825 0-1.412-.587T8 18t.588-1.412T10 16h10q.825 0 1.413.588T22 18t-.587 1.413T20 20zm0-6q-.825 0-1.412-.587T8 12t.588-1.412T10 10h10q.825 0 1.413.588T22 12t-.587 1.413T20 14zm0-6q-.825 0-1.412-.587T8 6t.588-1.412T10 4h10q.825 0 1.413.588T22 6t-.587 1.413T20 8zM4 8q-.825 0-1.412-.587T2 6t.588-1.412T4 4t1.413.588T6 6t-.587 1.413T4 8m0 6q-.825 0-1.412-.587T2 12t.588-1.412T4 10t1.413.588T6 12t-.587 1.413T4 14m0 6q-.825 0-1.412-.587T2 18t.588-1.412T4 16t1.413.588T6 18t-.587 1.413T4 20"></path></svg>
  )
}

export function MaterialSymbolsArrowDropDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m12 15l-5-5h10z"></path></svg>
  )
}

export function IcBaselineSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
      ></path>
    </svg>
  );
}

export function PhTelegramLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M228.88 26.19a9 9 0 0 0-9.16-1.57L17.06 103.93a14.22 14.22 0 0 0 2.43 27.21L72 141.45V200a15.92 15.92 0 0 0 10 14.83a15.91 15.91 0 0 0 17.51-3.73l25.32-26.26L165 220a15.88 15.88 0 0 0 10.51 4a16.3 16.3 0 0 0 5-.79a15.85 15.85 0 0 0 10.67-11.63L231.77 35a9 9 0 0 0-2.89-8.81m-61.14 36l-89.59 64.16l-49.6-9.73ZM88 200v-47.48l24.79 21.74Zm87.53 8l-82.68-72.5l119-85.29Z"
      ></path>
    </svg>
  );
}

export function PhYoutubeLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="m164.44 121.34l-48-32A8 8 0 0 0 104 96v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M120 145.05V111l25.58 17Zm114.33-75.53a24 24 0 0 0-14.49-16.4C185.56 39.88 131 40 128 40s-57.56-.12-91.84 13.12a24 24 0 0 0-14.49 16.4C19.08 79.5 16 97.74 16 128s3.08 48.5 5.67 58.48a24 24 0 0 0 14.49 16.41C69 215.56 120.4 216 127.34 216h1.32c6.94 0 58.37-.44 91.18-13.11a24 24 0 0 0 14.49-16.41c2.59-10 5.67-28.22 5.67-58.48s-3.08-48.5-5.67-58.48m-15.49 113a8 8 0 0 1-4.77 5.49c-31.65 12.22-85.48 12-86 12H128c-.54 0-54.33.2-86-12a8 8 0 0 1-4.77-5.49C34.8 173.39 32 156.57 32 128s2.8-45.39 5.16-54.47A8 8 0 0 1 41.93 68c30.52-11.79 81.66-12 85.85-12h.27c.54 0 54.38-.18 86 12a8 8 0 0 1 4.77 5.49C221.2 82.61 224 99.43 224 128s-2.8 45.39-5.16 54.47Z"
      ></path>
    </svg>
  );
}

export function TablerBrandTwitter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M22 4.01c-1 .49-1.98.689-3 .99c-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4c0 0-4.182 7.433 4 11c-1.872 1.247-3.739 2.088-6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"
      ></path>
    </svg>
  );
}

export function UitFacebookF(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17.99 1.596a27.982 27.982 0 0 0-3.037-.156C11.59 1.44 9.5 3.582 9.5 7.03v2.341H6.675a.5.5 0 0 0-.5.5v3.85a.5.5 0 0 0 .5.5H9.5v7.72a.5.5 0 0 0 .5.5h3.978a.5.5 0 0 0 .5-.5v-7.72h2.816a.5.5 0 0 0 .496-.435l.497-3.85a.5.5 0 0 0-.496-.565h-3.313V7.412c0-.97.195-1.375 1.408-1.375h2.039a.5.5 0 0 0 .5-.5V2.092a.5.5 0 0 0-.435-.496m-.565 3.44l-1.54.001c-2.157 0-2.407 1.356-2.407 2.375v2.46a.5.5 0 0 0 .499.5h3.246l-.369 2.85h-2.876a.5.5 0 0 0-.5.5v7.718H10.5v-7.718a.5.5 0 0 0-.5-.5H7.176v-2.85H10a.5.5 0 0 0 .5-.5V7.03c0-2.874 1.665-4.59 4.453-4.59c1.009 0 1.92.055 2.472.103z"
      ></path>
    </svg>
  );
}
