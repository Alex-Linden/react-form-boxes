import React, { useState } from "react";

/**
 * This component should render a form that when submitted, creates a new Box.
 * You should be able to specify the Box’s width, height, and background color.
 * When the form is submitted, clear the input values
 *
 * props:
 * state:
 *
 * BoxList -> NewBoxForm
 */

function NewBoxForm({addBox}) {
  const initialState = { height: 0, width: 0, backgroundColor: "" };
  const [formData, setFormData] = useState(initialState);

  /** Send {height, width, backgroundColor} to parent
   *    & clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height:</label>
      <input
        type="number"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        type="number"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />


      <label htmlFor="backgroundColor">background Color:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <button>Add a new Box!</button>
    </form>
  );
}

export default NewBoxForm;