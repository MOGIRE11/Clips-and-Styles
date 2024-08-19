
import landingimage1 from "./Assets/Landingimage1.svg";
export default function Home() {
  return (
    <div className="px-4 my-8">
      {/* hero section */}
      <div className="hero flex gap-10">
        <div
          className="headline w-[50%] flex flex-col
          justify-center"
        >
          <h1 className=" text-5xl font-bold ">
            Embrace your beauty journey! Discover a world of pampering and
            self-care at your fingertips
          </h1>
        </div>
        <div className="illustration border">
          <img src={landingimage1} alt="" className="rounded-xl w-[676px] h-[464px]" />
        </div>
      </div>
    </div>
  );
}


