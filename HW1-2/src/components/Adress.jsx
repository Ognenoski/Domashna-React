import React from "react";

export const Adress = (props) => {
  return (
    <div>
      <h2>Users From Skopje</h2>

      {props.users.map((user, index) => 
      user.adresa === "Skopje" ? (
        <div key={index}>
          <p>{user.ime} {user.prezime} zivee vo {user.adresa}.</p>
        </div>
      ) : null
      )}
    </div>
  );
};
