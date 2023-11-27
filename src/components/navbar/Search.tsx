import { useState } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {
  onClick?: (searchKey: string) => void;
};

function Search({ onClick }: Props) {
  const [searchKey, setSearchKey] = useState("");

  return (
    <div className="w-[280px] sm:w-[420px] md:w-[600px] mx-auto border-2 rounded-full border-neutral-400 h-12 overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="w-full px-2 py-0">
          <div className="relative text-base">
            <BiSearch className="absolute text-gray-400 top-3 left-2 text-xl" />
            <input
              type="text"
              className="bg-white h-10 w-full px-12 rounded-lg focus:outline-none"
              placeholder="Search for products..."
              name=""
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
            />
            <div
              onClick={() => {
                onClick && onClick(searchKey);
              }}
              className="absolute hidden sm:block top-0 h-12 pt-[10px] right-[-10px] bg-rose cursor-pointer"
            >
              <span className=" mx-8 text-white text-base font-semibold leading-4">
                Search
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
