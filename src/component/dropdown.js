import React, {useState} from "react";
import "./dropdown.css";

const Dropdown = ({items}) =>{
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("select");

  // Sets isOpen to true to open the dropdown menu when the mouse enters the component.
  const handleHover = () => setIsOpen(true);

  // Sets isOpen to false to close the dropdown menu when the mouse leaves the component.
  const handleLeave = () => setIsOpen(false);

  // Updates the selected state with the clicked option and closes the dropdown menu.
  const handleOptionClick = (item) =>{
    setSelected(item);
    setIsOpen(false);
  };

  return(
    <div 
    // Handles hover interactions with onMouseEnter and onMouseLeave.
        className="dropdown"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}    
    >
      <label className="dropdown-label">Should you use a dropdown</label>
      
      {/* Shows the currently selected option and a dropdown arrow. */}
      <div className="dropdown-header">
        {selected}
        <span className="dropdown-arrow">▼</span>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index)=>(
            <li
              key = {index}
              className="dropdown-item"
              onClick={() => handleOptionClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )

}
export default Dropdown;