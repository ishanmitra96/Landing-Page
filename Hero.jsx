import { heroImg } from "../assets"

const Hero = () => {
  return (
    <div className="w-full bg-white py-24">
        <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[680px]">
            <div className="flex flex-col justify-start gap-4">
                <p className="py-2 text-2xl uppercase text-[#20B486] font-medium">start to success </p>
                <h1 className=" md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold">Access to <span className=" text-[#20B486]">5000+</span>courses from <span className=" text-[#20B486]">300</span> instructors & institution</h1>
                <p className="py-2 text-lg text-[#20B486]">various versions have evolved over the years. sometimes by accidents</p>
            </div>
            <img src={heroImg} className=" md:order-last order-first" />
        </div>
      
    </div>
  )
}

export default Hero
