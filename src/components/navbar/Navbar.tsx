// user defined components
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import Cart from "./Cart";

function Navbar() {
  return (
    <div className="fixed w-full bg-white shadow-sm z-10">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:g-0">
            <Logo />
            <Search />
            <Cart />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
