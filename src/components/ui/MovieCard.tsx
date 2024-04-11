/* eslint-disable @next/next/no-img-element */
import React, { SVGProps, useState } from "react";
import { movieData } from "../../../public/data/movieData";

const MovieCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { thumbImg, title, year, releaseDate } = movieData[0];
  return (
    <div className="w-full shadow-lg h-[360px] relative overflow-hidden">
      <img
        className={`w-full h-full object-cover rounded-md transition-all duration-500 ${isHovered ? "scale-110" : ""}`}
        src={thumbImg}
        alt="img"
      />
      {/* absoluter part  */}
      <div className="absolute top-0 left-0 w-full h-full blackAndWhiteBg rounded-md shadow-lg">
        <div className="flex flex-col items-start w-full h-full justify-end p-2 text-white gap-1 cursor-pointer" onMouseEnter={() => setIsHovered(!isHovered)} onMouseLeave={() => setIsHovered(!isHovered)}>
          <button className="btnGradient font-semibold px-3 py-1 rounded-md text-sm">
            {year}
          </button>
          <h1 className="text-xl font-semibold text-gray-50 transition-all duration-100 hover:underline">{title}</h1>
          <div className="flex gap-1 items-center text-sm font-medium">
            <MaterialSymbolsEditCalendarOutlineRounded />
            <p className="">{releaseDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

export function MaterialSymbolsEditCalendarOutlineRounded(
  props: SVGProps<SVGSVGElement>
) {
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
        d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v4.025q0 .425-.288.713t-.712.287t-.712-.288t-.288-.712V10H5v10h6q.425 0 .713.288T12 21t-.288.713T11 22zM5 8h14V6H5zm0 0V6zm9 13v-1.65q0-.2.075-.387t.225-.338l5.225-5.2q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55t-.1.563t-.325.512l-5.2 5.2q-.15.15-.337.225T16.65 22H15q-.425 0-.712-.287T14 21m7.5-5.575l-.925-.925zm-6 5.075h.95l3.025-3.05l-.45-.475l-.475-.45l-3.05 3.025zm3.525-3.525l-.475-.45l.925.925z"
      ></path>
    </svg>
  );
}
