import React from "react";

const Category = ({ onMouseEnter, mouseLeave }) => {
  return (
    <div>
      {onMouseEnter && (
        <ul>
          <li>Coffee</li>
          <li>Epresso</li>
          <li>Eiskaffee</li>
        </ul>
      )}
    </div>
  );
};

export default Category;
