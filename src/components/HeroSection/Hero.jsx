
const Hero = () => {
  return (
    <div className="bg-[#CBEEFF] w-screen flex justify-center md:justify-center lg:justify-center bg-[url('/bghero.png')] gap-5 lg:gap-16 bg-center pt-8 pb-10 items-center">
        <div className="w-[400px] px-6">
            <p className="text-xl mb-2">Key Areas:</p>
            <ul className="text-[17]">
                <li>1. Breakout Theatre 1 - Grand Ballroom 1</li>
                <li>2. Breakout Theatre 2 - Grand Ballroom 3</li>
                <li>3. Breakout Theatre 3 - Royal Ballroom 1</li>
                <li>4. Breakout Theatre 4 - Royal Ballroom 2 </li>
                <li>5. Breakout Theatre 5 - Grand Ballroom 2</li>
                <li>6. Al-First Expo - Pre-function Area</li>
                <li>7. Expo Theatres - Studio 3 & Royal Ballroom 1-2</li>
                <li>8. Breakout Theatre 1 - Grand Ballroom 1</li>
            </ul>
        </div>
        <div className=" hidden md:block lg:block h-full">
            <img src="/img112.png" alt="" className="h-full" />
        </div>
    </div>
  )
}

export default Hero