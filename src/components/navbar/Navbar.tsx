import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";

function Navbar() {
  return (
    <div className="fixed w-full bg-white shadow-sm z-10">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:g-0">
            <Logo />
            <Search
              onClick={(searchKey) => {
                console.log("Search clicked: ", searchKey);
              }}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
