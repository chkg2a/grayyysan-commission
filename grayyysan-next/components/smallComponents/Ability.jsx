import { GiSpeedometer } from "react-icons/gi";
import { IoIosTimer } from "react-icons/io";
import { GiBullseye } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineWaterDrop } from "react-icons/md";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

const Ability = ({ head, body, pos }) => {
  return (
    <div className="border-2 rounded-2xl p-10 flex flex-col justify-center items-center gap-4">
      <span className="text-6xl">
        {pos == 1 ? <GiSpeedometer /> : <></>}
        {pos == 2 ? <IoIosTimer /> : <></>}
        {pos == 3 ? <FaPaintBrush /> : <></>}
        {pos == 4 ? <MdOutlineWaterDrop /> : <></>}
        {pos == 5 ? <IoMdPerson /> : <></>}
        {pos == 6 ? <TbAdjustmentsHorizontal /> : <></>}
      </span>
      <h1 className="text-4xl">{head}</h1>
      <p className="text-sm text-gray-500">{body}</p>
    </div>
  );
};

export default Ability;
