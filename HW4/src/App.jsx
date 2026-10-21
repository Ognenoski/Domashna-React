import React from "react";
import { SignUpForm } from "./components/SignUpForm";
import { SignUpFormClass } from "./components/SignUpFormClass";
import { Login } from "./components/Login";
import "./css/App.css"


export function App() {
  return (
    <div id="app">
      <h1>Sign Up Form</h1>
      <SignUpForm />
      <br />
      <br />
      <SignUpFormClass />
      <br />
      <br />
      <Login />
    </div>
  );
}
