import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar flex justify-between bg-cyan-300 h-16 z-10 relative">
      <div className="title grow-[1]">
        <a className="btn btn-ghost normal-case text-3xl">Basa Vara</a>
      </div>

      <div
        className={`absolute flex flex-col mb-2 items-center  bg-cyan-300 w-full md:mb-0 left-0 md:flex-row md:static md:w-auto  z-[1] md:z-[1] ${
          open ? "top-16 " : "-top-64 md:top-0"
        }`}
      >
        <a className="btn btn-ghost normal-case text-xl hover:text-cyan-100">
          Rent
        </a>

        <a className="btn btn-ghost normal-case text-xl hover:text-cyan-100">
          To-Let
        </a>

        <a className="btn btn-ghost normal-case text-xl hover:text-cyan-100">
          About
        </a>

        <a className="btn btn-ghost normal-case text-xl hover:text-cyan-100">
          Contact
        </a>
        <div className="flex justify-center mb-4 md:m-0">
          <a className="rounded-md border-[1px] p-2 border-cyan-600 hover:bg-cyan-600 font-medium hover:text-cyan-100 text-center">
            Sign in | Sign up
          </a>
        </div>
      </div>

      <div
        className="navIcon h-8 grow-[2] flex justify-end m-3 md:hidden"
        onClick={() => setOpen(!open)}
      >
        <i className="fa-solid fa-bars fa-xl"></i>
      </div>
    </div>
  );
};
export default Navbar;
