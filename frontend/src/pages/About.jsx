import about1 from "./Assets/Frame-156.png";

function About() {
  return (
    <div className="about bg-[#300603]">
      <div
        className="about-us container mx-auto relative h-screen bg-cover bg-center text-white mb-14 "
        style={{
          backgroundImage: `url(${about1})`, // Use backticks for template literals
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Overlay */}
        <div className="relative flex justify-center items-center h-full">
          <h1 className="text-5xl font-bold">ABOUT US</h1>
        </div>
      </div>

      <div className="hero"></div>
    </div>
  );
}


export default About;
