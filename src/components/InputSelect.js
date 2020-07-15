import React from "react";

export const InputSelect = (props) => {
  return (
    <select onChange={props.onChange}>
      {props.data.map((value, index) =>
        props.option ? (
          <option value={value}>{value}</option>
        ) : (
          <option value={index + 1}>{value}</option>
        )
      )}
    </select>
  );
};
