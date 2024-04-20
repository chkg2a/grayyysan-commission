import { FAQs } from "@/constants";

const FAQ = () => {
  return (
    <div className="p-52 w-full h-full bg-black flex flex-col items-center ">
      <div className="text-white gap-2 pb-32">
        <h1 className="font-semibold text-4xl lg:text-6xl">
          FAQs
        </h1>
      </div>
      <div className="w-full lg:w-4/6  min-w-[400px]">
        {FAQs.map((item) => (
          <div className="collapse collapse-arrow text-white">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-4xl font-medium">
              {item.heading}
            </div>
            <div className="collapse-content">
              <p>
                {item.body}
              </p>
            </div>
            <div className="divider" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
