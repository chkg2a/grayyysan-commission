import { FAQs } from "@/constants";

const FAQ = () => {
  return (
    <div className="w-full h-full bg-gray-200 flex flex-col items-center ">
      <div className="text-black gap-2 p-10">
        <h1 className="text-black font-semibold text-4xl lg:text-6xl">
          FAQs
        </h1>
      </div>
      <div className="w-4/6">
        {FAQs.map((item) => (
          <div className="collapse collapse-arrow text-black">
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
