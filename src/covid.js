import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./covid.css";

export class covid extends Component {
  state = { patientName: "" };

  changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hi ${this.state.patientName}, Your covid registration is done.`);
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <br />
          <h2>Covid Vaccination Form:</h2>
          <br />
          <div className="form-group">
            <label>Patient Name:</label>
            <input
              type="text"
              style={{ width: "40%" }}
              className="form-control"
              onChange={this.changeHandler}
              name="patientName"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label>Patient ID:</label>
            <input
              type="text"
              name="id"
              style={{ width: "40%" }}
              className="form-control"
              placeholder="Id"
            />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="date"
              style={{ width: "40%" }}
              className="form-control"
              placeholder="date"
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>

            <label class="radio-inline">
              <input type="radio" id="male" name="gender" value="male" />
              Male
            </label>

            <label class="radio-inline">
              <input type="radio" id="female" name="gender" value="female" />
              Female
            </label>

            <label class="radio-inline">
              <input type="radio" id="other" name="gender" value="other" />
              Other
            </label>
          </div>

          <div className="form-group">
            <label>BloodGroup: </label>
            <select
              name="bg"
              id="bg"
              class="form-control"
              style={{ width: "40%" }}
            >
              <option>--Please select--</option>
              <option value="A+">A+</option>
              <option value="O+">O+</option>
              <option value="B+">B+</option>
              <option value="AB+">AB+</option>
              <option value="A-">A+</option>
              <option value="O-">O-</option>
              <option value="B-">B-</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          <div class="form-group">
            <label>State:</label>
            <select class="form-control" id="sel1" style={{ width: "40%" }}>
              <option>--Please select--</option>
              <option>Maharashtra</option>
              <option>Gujarat</option>
              <option>Kerala</option>
              <option>Odisha</option>
              <option>Karnataka</option>
              <option>Haryana</option>
              <option>Goa</option>
              <option>Assam</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Uttarakhand</option>
              <option>Telangana</option>
              <option>Chhattisgarh</option>
              <option>Andhra Pradesh</option>
            </select>
          </div>
          <div class="form-group">
            <label>Already Suffered: </label>
            <label class="radio-inline">
              <input type="radio" id="yes" name="choice" value="yes" />
              Yes
            </label>
            <label class="radio-inline">
              <input type="radio" id="no" name="choice" value="no" />
              No
            </label>
          </div>

          <div class="form-group">
            <label for="comment">Pre-existing health condition:</label>
            <textarea
              class="form-control"
              rows="5"
              id="comment"
              style={{ width: "40%" }}
            ></textarea>
          </div>

          <div class="form-group">
            <label for="comment">Allergy Details:</label>
            <textarea
              class="form-control"
              rows="4"
              id="comment"
              style={{ width: "40%" }}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-success"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
          <button type="reset" className="btn btn-danger">
            Reset
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default covid;
