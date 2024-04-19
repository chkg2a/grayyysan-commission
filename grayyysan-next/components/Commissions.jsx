import Image from "next/image";

const Commissions = () => {
  return (
    <div className="p-10 bg-white w-full h-full flex-col flex items-center">
      <div className="flex flex-col items-center text-black gap-2 p-10">
        <h1 className="text-black font-semibold text-4xl lg:text-6xl">
          Commissions
        </h1>
        <p className="text-gray-500">
          Explore Grayyysan's beautifully drawn commissions
        </p>
      </div>
      <div className="flex w-5/6 mt-20">
        <div className="w-full h-auto lg:w-4/6 border-2 rounded-xl overflow-hidden">
          <Image
            className="h-full object-cover transition-all scale-[1.1] hover:scale-[1.0]"
            src="/IMG_1912.jpg"
            height="1920"
            width="1080"
            alt="Renne Bright"
          />
        </div>
        <div className="text-black">
          <div className="rating rating-lg">
            <input type="radio" name="rating-9" className="rating-hidden" />
            <input type="radio" name="rating-9" className="mask mask-star-2" />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2"
              checked
            />
            <input type="radio" name="rating-9" className="mask mask-star-2" />
            <input type="radio" name="rating-9" className="mask mask-star-2" />
            <input type="radio" name="rating-9" className="mask mask-star-2" />
          </div>
          <h1>ChK</h1>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Commissions;
