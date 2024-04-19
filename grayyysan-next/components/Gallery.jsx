import Image from "next/image";
import { IMG_GALLERY } from "@/constants";

const Gallery = () => {
  return (
    <div id="gallery" className="w-full h-full flex flex-col items-center p-10 bg-white">
      <div className="flex flex-col items-center text-black gap-2 p-10">
        <h1 className="text-black font-semibold text-4xl lg:text-6xl">
          Image Showcase
        </h1>
        <p className="text-gray-500">
          Explore Grayyysan's stunning artwork collection and find your favorite
          pieces
        </p>
      </div>
      <div className="h-1/2 w-5/6 grid grid-cols-3">
        {IMG_GALLERY.map((item, i) => (
          <div
            key={i}
            className={`w-auto rounded-xl p-2 overflow-hidden ${i == 3 ? "row-span-2" : ""
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
