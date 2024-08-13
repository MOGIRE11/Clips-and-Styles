function Navbar() {
  return (
    <nav className="p-3 flex items-center justify-between w-full border border-red-500">
      <div className="logo">
        <a href="#" className="text-lg tracking-wider">
          Clips&Styles
        </a>
      </div>
      <div className="nav-links">
        <ul className="flex gap-4">
          <li>
            <a href="#" className="list-item1">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="list-item1">
              Categories
            </a>
          </li>
          <li>
            <a href="#" className="list-item1">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="list-item1">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="right-nav flex items-center justify-between gap-4">
        <span>{/* light and dark mode toggle */}</span>
        <button type="button" className="border py-1 px-4 rounded-md">Log in</button>
        <button type="button" className="border py-1 px-4 rounded-md">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar