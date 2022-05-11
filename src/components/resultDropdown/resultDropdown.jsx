import './resultDropdown.css'
import { RiPencilLine} from "react-icons/ri";
import {HiOutlineTrash} from "react-icons/hi";

const ResultDropdown =()=>{
    return(
        <div className="result_dropdown">
        <p className="result_dropdown_paragraph"> <RiPencilLine className='dropdown_icon'/> Edit</p>
        <p className="result_dropdown_paragraph result_dropdown_paragraph--delete"> <HiOutlineTrash className='dropdown_icon'/>Update</p>
    </div>
    )
}

export default ResultDropdown