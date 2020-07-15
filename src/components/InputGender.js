import React from "react";

export const InputGender = (props) => {
  if (props.option === props.value) {
    return (
      <label>
        <input
          type="radio"
          name={props.name}
          value={props.value}
          checked
          onChange={props.onChange}
        />
        {props.text}
      </label>
    );
  }
  return (
    <>
      <label>
        <input
          type="radio"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
        {props.text}
      </label>
    </>
  );
};
