import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { PiTelegramLogoThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { PiBagSimpleLight } from "react-icons/pi";
import { useAuth } from "./hooks/useAuth";
import Logout from "./Logout";
import Container from "./Container";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import LoginPage from "./page/LoginPage";
import Search from "./page/Search";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const [search, setSearch] = React.useState(false);
  const onSearch = () => {
    setSearch(!search);
  };

  const { currentUser } = useAuth();

  return (
    <header className="z-50 bg-white fixed top-0 left-0 right-0">
      <Container className="flex justify-between items-center h-20">
        <div>
          <MdMenu size={20} onClick={handleClick} className="cursor-pointer" />
        </div>
        <div
          onClick={handleClick}
          className={
            isOpen
              ? "fixed left-0 top-0 p-8 ease-in duration-500 z-50 bg-white w-[100%] md:w-[30%] h-full md:my-5"
              : "fixed left-[-100%] ease-in duration-500 p-10 top-0"
          }
        >
          <div>
            <li className="flex items-center my-5">
              <FiUser
                className="bg-fuchsia-800 rounded-full p-1 mr-5 my-1"
                size={30}
              />{" "}
              <Link to="/profile" className="font-bold">
                PROFILE
              </Link>
            </li>
          </div>
          <Link to="/libasxkiaraadvani">
            <li className="py-3 border-y"> LIBAS X KIARA ADVANI</li>
          </Link>
          <Link to="/collections">
            <li className="py-3 border-y">COLLECTION</li>
          </Link>
          <Link to="/newarrivals">
            <li className="py-3 border-y">NEW ARRIVALS</li>
          </Link>
          <Link to="/bestsellers">
            <li className="py-3 border-y">BEST SELLERS</li>
          </Link>
          <Link to="/shop">
            <li className="py-3 border-y">SHOP</li>
          </Link>
          <Link to="/libasart">
            <li className="py-3 border-y">LIBAS ART</li>
          </Link>
          <Link to="/extralove">
            <li className="py-3 border-y">EXTRA LOVE</li>
          </Link>
          <Link to="/geruabylibas">
            <li className="py-3 border-y">GERUA BY LIBAS</li>
          </Link>
          <Link to="/specialedit">
            <li className="py-3 border-y">SPECIAL EDITS</li>
          </Link>
          <ul className="py-3">{currentUser && <Logout />}</ul>

          <div className="absolute top-5 px-2 bg-white right-2">
            <button onClick={handleClick}>
              {" "}
              <IoMdClose />
            </button>
          </div>
        </div>
        {/* logo */}
        <div>
          <Link to="/">
            <img
              className="w-28 cursor-pointer hidden md:block"
              src="https://www.libas.in/cdn/shop/files/purple_Libas-Logo_1_1.png?v=1716187208&width=260"
            />
          </Link>
        </div>

        {/* auth */}

        <div className="flex gap-3 items-center">
          <div>
            <Search />
          </div>

          {currentUser !== null ? (
            <>
              <Link to="/cart">
                <PiBagSimpleLight size={25} />
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <CiUser size={25} className="hidden md:block" />
              </Link>
            </>
          )}

          <Link to="/trackorder">
            <PiTelegramLogoThin size={25} className="hidden md:block" />
          </Link>
          <Link to="/whistellist">
            <CiHeart size={25} />
          </Link>
        </div>
      </Container>
    </header>
  );
}
