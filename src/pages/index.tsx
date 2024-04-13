import HomeCategory from "@/components/ui/HomeCategory";
import MovieCard from "@/components/ui/MovieCard";
import Slider from "@/components/ui/Slider";

export default function Home() {
  return (
    <main>
      <div className="w-full h-auto py-5 md:gradiendBg">
        <div className="">
          <h1 className="md:text-gray-200 font-bold text-gray-700 text-2xl md:text-3xl mb-2 text-center ">
            TOP OF THE WEEK
          </h1>
          <div className="flex flex-col items-center gap-1 mb-4">
            <div className="w-[80px] h-[1px] md:bg-white bg-gray-600"></div>
            <div className="w-[160px] h-[1px] md:bg-white bg-gray-600"></div>
            <div className="w-[80px] h-[1.8px] md:bg-white bg-gray-600"></div>
          </div>
          <div className="container">
            <Slider />
          </div>
        </div>
      </div>
      <HomeCategory title="Action Movies" />
      <HomeCategory title="Animation Movies" />
      <HomeCategory title="Comedy Movies" />
      <HomeCategory title="Hindi-Dubbed Movies" />
    </main>
  );
}
