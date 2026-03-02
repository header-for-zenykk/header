import React from "react";
import menuData from '../../menu.json';
import { DropdownItem } from "./DropdownItem/DropDownItem";
import type { MenuItem } from "../../types/types";
import './Header.scss';

const typedMenuData = menuData as MenuItem[];

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">ІФМТ</div>
      <nav className="navigation">
        <ul className="nav-list">
          {typedMenuData.map((item, index) => (
            <DropdownItem key={index} item={item} />
          ))}
        </ul>
      </nav>
    </header>
  );
}