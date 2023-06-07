import { FaRegCircle, FaTimes, FaPen } from "react-icons/fa";

const Icons = ({name})=> {
    switch (name) {
      case "circle":
        return <FaRegCircle className="icons" />;
      case "cross":
        return <FaTimes className="icons"/>
      default:
        return <FaPen className="icons"/>
    }
    
}

export default Icons

