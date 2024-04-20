import Image from "next/image";
import { IMG_GALLERY } from "@/constants";

const Gallery = () => {
  return (
    <div id="gallery" className="w-full h-full flex flex-col items-center p-52 bg-black">
      <div className="flex flex-col items-center text-white gap-2 pb-32">
        <h1 className="font-semibold text-4xl w-[300px] lg:w-full lg:text-center lg:text-6xl">
          Image Showcase
        </h1>
        <p className="text-gray-500">
          Explore Grayyysan's stunning artwork collection and find your favorite
          pieces
        </p>
      </div>
      <div className="w-full min-w-[400px] h-full lg:h-1/2 lg:w-5/6 lg:grid lg:grid-cols-3">
        {IMG_GALLERY.map((item, i) => (
          <div
            key={i}
            className={`w-full lg:w-auto rounded-xl p-2 overflow-hidden ${i == 3 ? "row-span-2" : ""
              } ${i == 7 || i == 6 ? "col-span-2" : ""}
              }`}
          >
            <Image
              className={`object-cover h-full transition-all hover:scale-105 ${item.classes}`}
              src={item.src}
              height={item.height}
              width={item.width}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
