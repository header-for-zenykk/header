import React, { useState } from "react";
import type { MenuItem } from "../../../types/types";
import '../Header.scss';

interface Props {
  item: MenuItem;
}

export const DropdownItem: React.FC<Props> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li 
      className="nav-item"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}  
    >
      <a href={item.path} className="nav-link">
        {item.title}
      </a>

      {item.subItems && isOpen && (
        <ul className="dropdown-menu">
          {item.subItems.map((subItem, index) => (
            <li key={index} className="dropdown-item">
              <a href={subItem.path}>{subItem.title}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}