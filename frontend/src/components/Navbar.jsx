// TODO:
// Replace hrefs ,buttons with navlinks
//responsiveness


function Navbar() {
  return (
    <nav className="p-3 h-[70px] flex items-center justify-between w-full text-white sticky top-0 z-10 backdrop-blur-lg bg-[#1D0301]/50">
      <div className="logo">
        <a href="/" className="text-lg tracking-wider">
          Clips & Styles
        </a>
      </div>

      <div className="hidden lg:flex items-center nav-links relative">
        <ul className="flex gap-4 items-center">
          <li>
            <a href="/" className="list-item1">
              Home
            </a>
          </li>
          <li className="categories">
            <a href="#">Categories</a>
            <div className="sub-menu hidden absolute top-[100%] left-[-180px] border border-transparent w-[550px] h-52 backdrop-blur-md rounded-[16px] bg-black grid-cols-4 p-4 gap-4 animate__animated animate__fadeIn">
              <a href="/" className="sub-item">
                Barbershop
              </a>
              <a href="/" className="sub-item">
                Hair Salon
              </a>
              <a href="/" className="sub-item">
                Spa
              </a>
              <a href="/" className="sub-item">
                Nail Tech
              </a>
              <a href="/" className="sub-item">
                Make up
              </a>
              <a href="/" className="sub-item">
                Skincare
              </a>
              <a href="/" className="sub-item">
                Piercing
              </a>
              <a href="/" className="sub-item">
                Tattoo
              </a>
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
          className="border-2 border-[#23461A] py-1.5 md:py-2 px-3 md:px-6 rounded-md active:translate-y-[2px] tracking-wide"
        >
          Log in
        </button>
        <button
          type="button"
          className="hidden border border-transparent py-2 px-6 rounded-md bg-[#23461A] hover:bg-[#23461A]/80 active:translate-y-[2px] lg:inline-flex"
        >
          Sign Up
        </button>

        <button
          className="menubar flex flex-col gap-1.5 border p-2 rounded-sm"
          popovertarget="menu-content"
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>

        {/* mobile-menu content */}
        <dialog
          popover="auto"
          id="menu-content"
          className="w-full h-[70dvh] border lg:hidden p-4"
        >
          <section className="mb-4 flex items-center justify-between">
            <a href="/" className="text-lg tracking-wide logo">
              Clips & Styles
            </a>

            <p className="inline float-right text-3xl border px-2" >&times;</p>
          </section>

          <ul className="content">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <details>
                <summary>Categories</summary>
                <div className="flex flex-col">
                  <a href="/" className="">
                    Barbershop
                  </a>
                  <a href="/" className="">
                    Hair Salon
                  </a>
                  <a href="/" className="">
                    Spa
                  </a>
                  <a href="/" className="">
                    Nail Tech
                  </a>
                  <a href="/" className="">
                    Make up
                  </a>
                  <a href="/" className="">
                    Skincare
                  </a>
                  <a href="/" className="">
                    Piercing
                  </a>
                  <a href="/" className="">
                    Tattoo
                  </a>
                </div>
              </details>
            </li>
            <li>
              <a href=""></a>About Us
            </li>
            <li>
              <a href=""></a>Blog
            </li>
          </ul>
        </dialog>
      </div>
    </nav>
  );
}

export default Navbar;
