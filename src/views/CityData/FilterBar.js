import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "./FilterBar.css";
const FilterBar = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div className="bar">
      <span className="filter">Filter </span>
      <div className="filter__options">
        <label for="size">Size</label>
        <select id="size" name="size">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <label for="price">Price</label>
        <select id="price" name="price">
          <option>1-2</option>
          <option>3-4</option>
          <option>4-5</option>
          <option>6-7</option>
          <option>7-8</option>
        </select>
      </div>
    </div>
    // <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
    //   <DropdownToggle caret>Filter</DropdownToggle>
    //   {/* <DropdownMenu>
    //     <DropdownItem header>Header</DropdownItem>
    //     <DropdownItem disabled>Action</DropdownItem>
    //     <DropdownItem>Another Action</DropdownItem>
    //     <DropdownItem divider />
    //     <DropdownItem>Another Action</DropdownItem>
    //   </DropdownMenu> */}
    // </ButtonDropdown>
  );
};

export default FilterBar;
