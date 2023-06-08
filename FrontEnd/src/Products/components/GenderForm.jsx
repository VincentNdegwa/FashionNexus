import React from "react";

function GenderForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <h2>Filter by target</h2>
      <div className="input-item">
        <input
          type="checkbox"
          name="female"
          checked={props.selectedGender === "female"}
          onChange={props.handleGender}
        />
        <h3>female</h3>
      </div>

      <div className="input-item">
        <input
          type="checkbox"
          name="male"
          checked={props.selectedGender === "male"}
          onChange={props.handleGender}
        />
        <h3>male</h3>
      </div>

      <div className="input-item">
        <input
          type="checkbox"
          name="all"
          checked={props.selectedGender === "all"}
          onChange={props.handleGender}
        />
        <h3>all</h3>
      </div>
    </form>
  );
}

export default GenderForm;
