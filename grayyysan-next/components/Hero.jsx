import Image from "next/image";
import NavBar from "@/components/NavBar"

const Hero = () => {
  return (
    <div
      className="relative bg-fixed bg-center w-screen h-[85vh] overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/IMG_1270.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <NavBar/>
      <div className='h-full flex flex-col flex-wrap justify-center items-center p-12'>
        <h1 className="w-full font-semibold lg:w-[45rem] text-center text-4xl lg:text-7xl">Grayyysan</h1>
        <p className="text-md text-gray-50 lg:w-[20rem] mt-10">
          Explore the captivating world of Grayyysann's art and be amazed by her
          creative vision and attention to detail.
        </p>
        <div className="mt-10 flex flex-wrap">
          <a href="#commission" className="text-center transition-all hover:scale-105 bg-black text-white p-2 w-32 border-2 border-black">Commission</a>
          <a href="#gallery" className="md:ml-5 text-center outline-white border-2 w-32 transition-all hover:scale-105 border-white p-2">Explore</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
      //
      // <div className='h-full flex flex-col flex-wrap justify-center p-12'>
      //   <h1 className="w-full font-semibold lg:w-[45rem] text-4xl lg:text-6xl lg:mt-60">Discover Grayyysann's Unique Art Style and Works</h1>
      //   <p className="text-md text-gray-50 lg:w-[40rem]">
      //     Explore the captivating world of Grayyysann's art and be amazed by her
      //     creative vision and attention to detail.
      //   </p>
      //   <div className="mt-10 flex flex-wrap">
      //     <a href="#commission" className="text-center transition-all hover:scale-105 bg-black text-white p-2 w-32 border-2 border-black">Commission</a>
      //     <a href="#gallery" className="md:ml-5 text-center outline-white border-2 w-32 transition-all hover:scale-105 border-white p-2">Explore</a>
      //   </div>
      // </div>
