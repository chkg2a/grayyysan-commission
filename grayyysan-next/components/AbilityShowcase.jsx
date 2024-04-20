import React from "react";
import Ability from "./smallComponents/Ability";
import { ABILITIES } from "@/constants";

const AbilityShowcase = () => {
  return (
    <div
      id="abilities"
      className="w-full h-full p-10 lg:p-52 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center text-white gap-2 pb-32">
        <h1 className="font-semibold text-4xl text-center w-[300px] lg:w-full lg:text-6xl">
          Abilities
        </h1>
      </div>
      <div className="w-full min-w-[300px] lg:w-5/6 flex flex-wrap ">
        <div className="w-full md:grid-cols-2 md:grid lg:grid-cols-3 gap-4 ">
          {ABILITIES.map((item) => (
            <Ability head={item.head} body={item.body} pos={item.pos} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AbilityShowcase;
