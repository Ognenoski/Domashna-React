import React, { useState } from "react";

export const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [showTable, setShowTable] = useState(true);

  return (
    <div id="sign-up-form">
      <input
        type="text"
        placeholder="Enter First Name"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Last Name"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(a) => {
          setAge(a.target.value);
        }}
      />
      <br />
      <br />

      <button onClick={()=>{setShowTable(!showTable)}}>{showTable ? "Hide Table" : "Show Table"}</button>
      <br />
      <br />
 


      { showTable && 

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
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td>{password}</td>
              <td>{age}</td>
            </tr>
          </tbody>
        </table>
      }
    </div>
  );
};
