import React, { SVGProps, useEffect, useState } from 'react'

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            }else{
                setIsVisible(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div onClick={scrollToTop} className={`fixed size-10 flex justify-center items-center text-white text-2xl rounded-full z-[9999] btnGradient right-10 bottom-8 ${isVisible ? "block" : "hidden"}`}>
            <MaterialSymbolsKeyboardArrowUp />
        </div>
    )
}

export default BackToTop


export function MaterialSymbolsKeyboardArrowUp(props: SVGProps<SVGSVGElement>) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z"></path></svg>
    )
  }