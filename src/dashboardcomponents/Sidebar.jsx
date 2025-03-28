// components/Sidebar.js
import { FaChartPie, FaCog, FaUser } from "react-icons/fa";
import { FaBluetooth ,FaClock ,FaItunesNote,FaShoppingCart} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { FiMusic } from "react-icons/fi";
import { FiGift } from "react-icons/fi";
import { FiRepeat } from "react-icons/fi";
import { FiSave } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
import Container from "@/dashboardcomponents/Container"
const Sidebar = () => {
  return (
   
    <div className=" h-[90%] w-17 bg-gradient-to-b from-neutral-600 via-neutral-600 to-neutral-700 text-gray-400 flex flex-col items-center justify-evenly  ml-4  rounded-4xl shadow-accent-foreground shadow-md">
      {/* <FaChartPie className="text-2xl cursor-pointer hover:text-white" />
      <FaUser className="text-2xl cursor-pointer hover:text-white" />
      <FaCog className="text-2xl cursor-pointer hover:text-white" />
      <FaBluetooth className="text-2xl cursor-pointer hover:text-white" />
      <FaClock className="text-2xl cursor-pointer hover:text-white" />
      <FaItunesNote className="text-2xl cursor-pointer hover:text-white" />
      <FaShoppingCart className="text-2xl cursor-pointer hover:text-white" /> */}
      <FiUserCheck className="text-3xl cursor-pointer hover:text-white " />
      <FiSettings className="text-3xl cursor-pointer hover:text-white" />
      <FiSave className="text-3xl cursor-pointer hover:text-white" />
      <FiThumbsUp className="text-3xl cursor-pointer hover:text-white" />
      <FiRepeat className="text-3xl cursor-pointer hover:text-white" />
      <FiMusic className="text-3xl cursor-pointer hover:text-white" />
      <FiGift className="text-3xl cursor-pointer hover:text-white" />
    </div>
 
  );
};

export default Sidebar;