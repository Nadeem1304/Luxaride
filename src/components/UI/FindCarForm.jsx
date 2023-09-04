import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">

      <FormGroup className="form__group">
          <input type="text" placeholder="Name" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Contact Number" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="No of Passengers" required />
        </FormGroup>

      <FormGroup className="form__group">
          <input type="text" placeholder="Source" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Destination" required />
        </FormGroup> 

        <FormGroup className="form__group">
          <input type="text" placeholder="Trip Type" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Trip time"
            required
          />
        </FormGroup>

        <FormGroup className="select__group">
          <select>
            <option value="ac">Sedan</option>
            <option value="non-ac">SUV</option>
            <option value="non-ac">Hatchback</option>
          </select>
        </FormGroup>

        <FormGroup className="select__group">
          <select>
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
