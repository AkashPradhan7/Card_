
import { FaRegFileLines } from "react-icons/fa6";
import { MdCloudDownload } from "react-icons/md";

const Carddd = () => {
  return (
    <div className="w-[190px] h-[220px] rounded-[30px] bg-zinc-600 text-white p-5 overflow-hidden ">
      <FaRegFileLines />


      <p className="text-xs mt-5 font-semibold">Lorem Ipsum is simply dummy text of the printing and web development</p>
      <div className="  footer rounded-sm absolute bottom-[335px] left-0 w-[190px] h-7 py-7 px-8">
        <div className="flex items-center justify-between mb-2 text-zinc-400 ">
          <h5>0.5 mb</h5>
          <MdCloudDownload />
        </div>
      </div>
    </div>
  );
};

export default Carddd;
