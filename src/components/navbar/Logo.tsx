function Logo() {
  return (
    <div className="flex gap-2 items-end cursor-pointer">
      <img
        src="/logo.jpeg"
        alt="betalimited logo"
        className="cursor-pointer filter hover:brightness-125 transition duration-150 ease-in-out h-12 w-12 sm:h-10 md:w-10 rounded-md"
        onClick={() => {
          // router.push("/");
        }}
      />
      <span className="hidden md:block text-base sm:text-xl md:text-2xl font-semibold text-neutral-800">
        Beta Limited
      </span>
    </div>
  );
}

export default Logo;