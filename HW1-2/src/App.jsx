import React from "react";
import {Age} from "./components/Age.jsx";
import {Adress} from "./components/Adress.jsx";

export function App() {
  const users = [
    { ime: "Daniel", prezime: "Ognenoski", adresa: "Ohrid", godini: 38 },
    { ime: "Petar", prezime: "Petrov", adresa: "Skopje", godini: 25 },
    { ime: "Jovana", prezime: "Jovanoska", adresa: "Bitola", godini: 30 },
    { ime: "Marko", prezime: "Markoski", adresa: "Skopje", godini: 16 },
  ];
  return (
    <div id="app">
      <h1>Domashna</h1>
      <hr />
      <Age users={users} />
    <hr />
<Adress users={users} />
    </div>
    
  );
};
