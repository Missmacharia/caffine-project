import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Category from "../category/Category";
import "./Sidebar.css";

const Sidebar = () => {
  const [modal, setModal] = useState(false);

  const handlerMouseEnter = () => {
    setModal(true);
  };

  const handlerMouseLeave = () => {
    setModal(false);
  };

  return (
    <div className="sidebar">
      <h1>All Categories</h1>
      <div className="categories">
        <div className="align_text">
          <BsArrowRightShort />
          <div>
            {modal && (
              <Category
                onmouseLeave={handlerMouseLeave}
              />
            )}
            <p onMouseEnter={()=>handlerMouseEnter}>Ice Coffee</p> 
          </div>
        </div>
        <div className="align_text">
          <BsArrowRightShort />
          <p>Espresso</p>
        </div>
        <div className="align_text">
          <BsArrowRightShort />
          <p>Eiskaffe</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
