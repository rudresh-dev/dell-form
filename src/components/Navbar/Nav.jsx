const Nav = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[65%] flex justify-between items-center my-4">
        <div className="w-[270px] h-[53px]">
          <img src="/one.webp" className="w-[100%]" alt="" />
        </div>
        <div className=" hidden lg:flex justify-around gap-4 items-center">
          <p className="text-[18px] font-bold text-[#444]">Summary</p>
          <p className="text-[18px] font-bold text-[#444]">What to Expect</p>
          <p className="text-[18px] font-bold text-[#444]">Agenda</p>
          <p className="text-[18px] font-bold text-[#444]">Speakers</p>
          <p className="text-[18px] font-bold text-[#444]">Sponsors</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
