import React from "react";
import "../css/Select.css";

function Select() {
  return (
    <div className="main_select">
      <select className="filter_select" name="filter_select" id="filter_select">
        <option value="">Trier par ---</option>
        <option value="">Nom, de A à Z</option>
        <option value="">Nom, de Z à A</option>
        <option value="">Prix, croissant</option>
        <option value="">Prix, décroissant</option>
      </select>
    </div>
  );
}

export default Select;
