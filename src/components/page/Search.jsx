import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Search = () => {
  const [search, setSearch] = React.useState(false);
  const onSearch = () => {
    setSearch(!search);
  };
  return (
    <div>
      <div>
        <CiSearch size={25} className="cursor-pointer" onClick={onSearch} />
      </div>
      <div className={search ? "block" : "hidden"}>
        <div className="fixed top-20 left-0 right-0 h-screen bg-white">
          <div className="border-y mt-1">
            <div className="flex gap-4 max-w-7xl mx-auto w-full py-2 items-center">
              <div>
                <CiSearch
                  size={25}
                  className="cursor-pointer"
                  onClick={onSearch}
                />
              </div>

              <div className="w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-3 outline-none"
                />
              </div>
              <div>
                <IoMdClose
                  size={25}
                  onClick={onSearch}
                  className="text-gray-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto">
            <p className="p-2">Search Results</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
