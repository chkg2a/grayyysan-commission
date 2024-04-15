import Image from "next/image";

const CPA = () => {
  return (
    <div className="bg-white h-screen">
      <div className="flex h-full justify-evenly items-center">
        <div>
          <h1 className="w-full text-black font-semibold lg:w-[45rem] text-4xl lg:text-6xl">
            Introducing Grayyysan: An Artist with a Passion for Creativity and
            Expression
          </h1>
          <p className="text-md text-gray-500 lg:w-[40rem]">
            Grayyysan is an aritst who believs in teh power of art to inspire,
            provke thought, and evoke emotions. her artistic journey has been a
            constant exploration of different mediums and styles, allowing her
            to craete unique and captivating pieces that resonatne with viewers.
          </p>
        </div>
        <div className="width-[600px] overflow-hidden rounded-xl">
          <Image
            src="/IMG_1985.jpg"
            height={600}
            width={600}
            className="w-full h-full object-cover transition-all hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default CPA;
