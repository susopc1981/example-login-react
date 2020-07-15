import React from "react";

export const InputText = (props) => {
  console.log(props.data);
  if (props.data.length > 3) {
    return (
      <input
        type="text"
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className="border border-danger"
      />
    );
  } else {
    return (
      <input
        type="text"
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    );
  }
};
