import React from "react";

export const Age = (props) => {
  return (
    <div>
      <p>Polnoletni</p>

      {props.users.map((user, index) => (
        <div key={index}>
          {user.godini > 18 ? (
            <p>
              {user.ime} {user.prezime} ima {user.godini} godini.
            </p>
          ) : (
            <p>Less then 18</p>
          )}
        </div>
      ))}
    </div>
  );
};