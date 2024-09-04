
const Hero = () => {
  return (
    <div className="bg-[#CBEEFF] w-screen flex justify-center flex-col md:flex-row md:justify-center lg:justify-center bg-[url('/bghero.png')] xl:gap-5 lg:gap-16 bg-center pt-8 pb-10 items-center px-8 gap-10">
        <div className=" px-0 lg:px-5">
            <p className="text-xl mb-2">Key Areas:</p>
            <ul className="text-[14]">
                <li className="text-[14]">1. Breakout Theatre 1 - Grand Ballroom 1</li>
                <li className="text-[14]">2. Breakout Theatre 2 - Grand Ballroom 3</li>
                <li className="text-[14]">3. Breakout Theatre 3 - Royal Ballroom 1</li>
                <li className="text-[14]">4. Breakout Theatre 4 - Royal Ballroom 2 </li>
                <li className="text-[14]">5. Breakout Theatre 5 - Grand Ballroom 2</li>
                <li className="text-[14]">6. Al-First Expo - Pre-function Area</li>
                <li className="text-[14]">7. Expo Theatres - Studio 3 & Royal Ballroom 1-2</li>
                <li className="text-[14]">8. Breakout Theatre 1 - Grand Ballroom 1</li>
            </ul>
        </div>
        <div className="md:block lg:block h-full w-full  lg:w-[500px]">
            <img src="/img112.png" alt="" className="h-full w-full" />
        </div>
    </div>
  )
}

export default Hero