import Image from "next/image";
import { CARD_IMAGE } from "@/constants";

const CPA = () => {
  return (
    <div className="p-10 bg-black w-full h-screen">
      <div className="flex h-full flex-wrap md:p-20 lg:flex-nowrap md:justify-between md:items-center">
        <div>
          <h1 className="w-full text-white font-semibold lg:w-[45rem] text-4xl lg:text-6xl">
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
        <div className="relative md:mr-52">
          <div className="card-group">
            {CARD_IMAGE.map((item, i) => (
              <>
                <div className={` ${item.divClass}`}>
                  <Image
                    src={item.src}
                    height={item.height}
                    width={item.width}
                    alt={item.alt}
                    className={`w-full rounded-xl h-full object-cover transition-all ${item.classes}`}
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPA;
