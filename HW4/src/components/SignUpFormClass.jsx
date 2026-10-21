import React from "react";

export class SignUpFormClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      age: 0,
      showTable: true,
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value
  });
  }
  render() {
    return (
      <div id="sign-up-class">
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleInputChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleInputChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Enter Age"
          name="age"
          value={this.state.age}
          onChange={this.handleInputChange}
        />
        <br />
        <br />

        <button
          onClick={() => {
            this.setState({ showTable: !this.state.showTable });
          }}
        >
          {this.state.showTable ? "Hide Table" : "Show Table"}
        </button>

        <br />
        <br />

        {this.state.showTable && (
          <table border={1}>
            <thead>
              <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Password</th>
              <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.firstName}</td>
                <td>{this.state.lastName}</td>
                <td>{this.state.email}</td>
                <td>{this.state.password}</td>
                <td>{this.state.age}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
