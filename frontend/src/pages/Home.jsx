import landingimage1 from "./Assets/Landingimage1.svg";

function Home() {
  return (
    <div className="px-4 my-8">
      {/* hero section */}
      <div className="hero">
        <div className="headline">
          <h1 className="">
            Embrace your beauty journey! Discover a world of pampering and
            self-care at your fingertips
          </h1>
        </div>
        <div className="illustration">
          <img src={landingimage1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
