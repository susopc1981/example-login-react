import React from "react";

export const InputSelect = (props) => {
  return (
    <select>
      {props.data.map((value) => (
        <option value={value}>{value}</option>
      ))}
    </select>
  );
};
