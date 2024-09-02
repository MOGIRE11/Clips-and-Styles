// TODO:
// Replace hrefs ,buttons with navlinks


function Navbar() {
  return (
    <nav className="p-3 h-[70px] flex items-center justify-between w-full text-white sticky top-0 z-10 backdrop-blur-lg bg-[#1D0301]/50">
      <div className="logo">
        <a href="/" className="text-lg tracking-wider">
          Clips & Styles
        </a>
      </div>

      <div className="nav-links relative">
        <ul className="flex gap-4 items-center">
          <li>
            <a href="/" className="list-item1">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="list-item2">
              Categories
            </a>
            <div className="sub-menu absolute top-[100%] left-[-150px] border border-transparent w-[500px] h-48 backdrop-blur-md rounded-lg bg-black grid grid-cols-4 p-4 gap-4">
              <a href="/" className="sub-item">Barbershop</a>
              <a href="/" className="sub-item">Hair Salon</a>
              <a href="/" className="sub-item">Spa</a>
              <a href="/" className="sub-item">Nail Tech</a>
              <a href="/" className="sub-item">Make up</a>
              <a href="/" className="sub-item">Skincare</a>
              <a href="/" className="sub-item">Piercing</a>
              <a href="/" className="sub-item">Tattoo</a>
            </div>
          </li>
          <li>
            <a href="#" className="list-item3">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="list-item4">
              Blog
            </a>
          </li>
        </ul>
      </div>

      <div className="right-nav flex items-center justify-between gap-4">
        <span>{/* light and dark mode toggle */}</span>

        {/* TODO : Replacing buttons with Navlinks */}
        <button
          type="button"
          className="border-2 border-[#23461A] py-2 px-6 rounded-md active:translate-y-[2px] tracking-wide"
        >
          Log in
        </button>
        <button
          type="button"
          className="border border-transparent py-2 px-6 rounded-md bg-[#23461A] hover:bg-[#23461A]/80 active:translate-y-[2px]"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar