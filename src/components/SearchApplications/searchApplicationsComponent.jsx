import  './searchApplication.styles.css'
import { FiSearch} from "react-icons/fi";



const SearchComponent = ()=>{


return(
   <div className="search-container">
       <p className="search_container_heading">
        All applications <span>50</span>
       </p>
       <div className="search_container-field">
           <div className='search_container_field_input' >
               <input type="text" placeholder='Search' className="search_container_field_input_element" />
               <span><FiSearch className='svg'/></span>
           </div>
            <select name="sort"  className="search_container_field_dropdown">
                <option value="">Sort</option>
                <option value="">A-Z</option>
                <option value="">Z-A</option>
            </select>
            <select name="sort"  className="search_container_field_dropdown">
               <option value=""> Filter</option>
                <option value="">Pending</option>
                <option value="">Scheduled</option>
                <option value="">Declined</option>
            </select>
       </div>
   </div>
)
}


export default SearchComponent