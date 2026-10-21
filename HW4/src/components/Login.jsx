import React, { useState, useEffect } from "react";
import { Input } from "./Input";
import { Dropdown } from "./Dropdown";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  const [selectedOption, setSelectedOption] = useState("");
  const [comment, setComment] = useState("");
  const [longComment, setLongComment] = useState(false);

  useEffect(() => {
    console.log("Username: ", username);
    console.log("Password: ", password);
  }, [username, password, comment]);

  const element = [
    { value: "", name: "" },
    { value: "Facebook", name: "Facebook" },
    { value: "Instagram", name: "Instagram" },
    { value: "SnapChat", name: "SnapChat" },
  ];

  function showValues(event) {
    event.preventDefault();
    alert(
      `Username:${username}\nPassword:${password}\nSelected Option:${selectedOption}`,
    );
  }

  return (
    <div id="login">
      <form onSubmit={showValues}>
        <Input
          type={"text"}
          placeholder={"Enter Username"}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          type={inputType}
          placeholder={"Enter Password"}
          value={password}
          name={"password"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          changePasswordInput={() => {
            setInputType("password");
          }}
          changeTextInput={() => {
            setInputType("text");
          }}
        />
        <Input
          type="text"
          placeholder="Enter Comment"
          value={comment}
          name="komentar"
          onChange={(e) => {
            setComment(e.target.value);
          }}
          renderTextArea={longComment}
          changeInputField={() => {
            setLongComment((prev) => !prev);
          }}
        />

        <Dropdown
          elements={element}
          onChange={(e) => {
            setSelectedOption(e.target.value);
          }}
        />

        <button className="action-button">Sign In</button>
      </form>
    </div>
  );
};
